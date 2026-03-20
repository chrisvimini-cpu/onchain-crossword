import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import Grid from './Grid';
import ClueBar from './ClueBar';
import Keyboard from './Keyboard';
import Timer from './Timer';
import CompletionModal from './CompletionModal';
import StatsModal from './StatsModal';
import HelpModal from './HelpModal';
import { getTodaysPuzzle } from '../lib/dailySelection';
import { buildCellClueMap, checkPuzzle, getCellsForClue, findNextIncompleteWord } from '../lib/puzzleEngine';
import { getPuzzleState, savePuzzleState, isTodayCompleted, recordCompletion } from '../lib/storage';
import styles from './Game.module.css';

function Game() {
  const [puzzle, setPuzzle] = useState(null);
  const [userGrid, setUserGrid] = useState([]);
  const [selectedClue, setSelectedClue] = useState(null);
  const [selectedDirection, setSelectedDirection] = useState('across');
  const [selectedCellIndex, setSelectedCellIndex] = useState(0);
  const [currentClueIndex, setCurrentClueIndex] = useState(0);
  const [cellClueMap, setCellClueMap] = useState({});
  const [isComplete, setIsComplete] = useState(false);
  const [showCompletion, setShowCompletion] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [solveTime, setSolveTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [errors, setErrors] = useState([]);
  const timerRef = useRef(null);

  // Compute flat list of all clues for navigation
  const allClues = useMemo(() => {
    if (!puzzle) return [];

    const clueList = [];

    puzzle.clues.across.forEach(clue => {
      clueList.push({ clue, direction: 'across' });
    });

    puzzle.clues.down.forEach(clue => {
      clueList.push({ clue, direction: 'down' });
    });

    // Sort by clue number
    clueList.sort((a, b) => a.clue.number - b.clue.number);

    return clueList;
  }, [puzzle]);

  // Utility function to sync currentClueIndex when clue changes
  const syncClueIndex = useCallback((clue, direction) => {
    const clueIndex = allClues.findIndex(
      item => item.clue.number === clue.number && item.direction === direction
    );
    if (clueIndex !== -1) {
      setCurrentClueIndex(clueIndex);
    }
  }, [allClues]);

  // Handle previous clue navigation
  const handleNavigatePrevious = useCallback(() => {
    if (currentClueIndex > 0) {
      const newIndex = currentClueIndex - 1;
      setCurrentClueIndex(newIndex);

      const { clue, direction } = allClues[newIndex];
      setSelectedClue(clue);
      setSelectedDirection(direction);

      // Find first empty cell or select first cell
      const cells = getCellsForClue(clue, direction);
      const firstEmpty = cells.findIndex(cell => !userGrid[cell.row]?.[cell.col]);
      setSelectedCellIndex(firstEmpty !== -1 ? firstEmpty : 0);
    }
  }, [currentClueIndex, allClues, userGrid]);

  // Handle next clue navigation
  const handleNavigateNext = useCallback(() => {
    if (currentClueIndex < allClues.length - 1) {
      const newIndex = currentClueIndex + 1;
      setCurrentClueIndex(newIndex);

      const { clue, direction } = allClues[newIndex];
      setSelectedClue(clue);
      setSelectedDirection(direction);

      const cells = getCellsForClue(clue, direction);
      const firstEmpty = cells.findIndex(cell => !userGrid[cell.row]?.[cell.col]);
      setSelectedCellIndex(firstEmpty !== -1 ? firstEmpty : 0);
    }
  }, [currentClueIndex, allClues, userGrid]);

  // Initialize puzzle
  useEffect(() => {
    const todaysPuzzle = getTodaysPuzzle();
    setPuzzle(todaysPuzzle);

    // Initialize empty user grid
    const emptyGrid = todaysPuzzle.grid.map(row =>
      row.map(() => '')
    );

    // Try to load saved state
    const savedState = getPuzzleState(todaysPuzzle.id);
    if (savedState) {
      setUserGrid(savedState.userGrid);
      setSolveTime(savedState.time || 0);
      setIsComplete(savedState.completed || false);
      if (savedState.completed) {
        setShowCompletion(true);
      }
    } else {
      setUserGrid(emptyGrid);
    }

    // Build cell-to-clue mapping
    const map = buildCellClueMap(todaysPuzzle);
    setCellClueMap(map);

    // Select first across clue by default
    if (todaysPuzzle.clues.across.length > 0) {
      setSelectedClue(todaysPuzzle.clues.across[0]);
      setSelectedDirection('across');
      setSelectedCellIndex(0);
      setCurrentClueIndex(0);
    }
  }, []);

  // Timer effect
  useEffect(() => {
    if (isRunning && !isComplete) {
      timerRef.current = setInterval(() => {
        setSolveTime(prev => prev + 1);
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isRunning, isComplete]);

  // Save state when userGrid or time changes
  useEffect(() => {
    if (puzzle && userGrid.length > 0) {
      savePuzzleState(puzzle.id, userGrid, isComplete, solveTime);
    }
  }, [puzzle, userGrid, isComplete, solveTime]);

  // Handle cell selection
  const handleCellClick = useCallback((row, col) => {
    if (!puzzle || isComplete) return;

    const key = `${row}-${col}`;
    const cellClues = cellClueMap[key];

    if (!cellClues) return; // Black square or invalid

    // Start timer on first interaction
    if (!isRunning) {
      setIsRunning(true);
    }

    // If clicking the currently selected cell, toggle direction
    if (selectedClue) {
      const currentCells = getCellsForClue(selectedClue, selectedDirection);
      const clickedCellIndex = currentCells.findIndex(
        cell => cell.row === row && cell.col === col
      );

      if (clickedCellIndex !== -1 && clickedCellIndex === selectedCellIndex) {
        // Toggle direction if the cell belongs to both
        const newDirection = selectedDirection === 'across' ? 'down' : 'across';
        if (cellClues[newDirection]) {
          setSelectedDirection(newDirection);
          setSelectedClue(cellClues[newDirection]);
          const newCells = getCellsForClue(cellClues[newDirection], newDirection);
          const newIndex = newCells.findIndex(cell => cell.row === row && cell.col === col);
          setSelectedCellIndex(newIndex);
        }
        return;
      }
    }

    // Select the cell and its clue
    const direction = cellClues[selectedDirection] ? selectedDirection :
      (cellClues.across ? 'across' : 'down');

    const clue = cellClues[direction];
    const cells = getCellsForClue(clue, direction);
    const cellIndex = cells.findIndex(cell => cell.row === row && cell.col === col);

    setSelectedClue(clue);
    setSelectedDirection(direction);
    setSelectedCellIndex(cellIndex);
    syncClueIndex(clue, direction);
  }, [puzzle, cellClueMap, selectedClue, selectedDirection, selectedCellIndex, isComplete, isRunning, syncClueIndex]);

  // Handle letter input
  const handleLetterInput = useCallback((letter) => {
    if (!selectedClue || isComplete) return;

    // Start timer on first interaction
    if (!isRunning) {
      setIsRunning(true);
    }

    const cells = getCellsForClue(selectedClue, selectedDirection);
    const currentCell = cells[selectedCellIndex];

    if (!currentCell) return;

    // Update the grid
    const newGrid = userGrid.map((row, r) =>
      row.map((cell, c) => {
        if (r === currentCell.row && c === currentCell.col) {
          return letter.toUpperCase();
        }
        return cell;
      })
    );

    setUserGrid(newGrid);

    // Move to next cell
    if (selectedCellIndex < cells.length - 1) {
      setSelectedCellIndex(selectedCellIndex + 1);
    } else {
      // At end of word, jump to next incomplete word
      const nextWord = findNextIncompleteWord(puzzle, newGrid, selectedDirection);
      if (nextWord) {
        setSelectedClue(nextWord.clue);
        setSelectedDirection(nextWord.direction);
        syncClueIndex(nextWord.clue, nextWord.direction);
        const nextCells = getCellsForClue(nextWord.clue, nextWord.direction);
        const firstEmpty = nextCells.findIndex(cell => !newGrid[cell.row]?.[cell.col]);
        setSelectedCellIndex(firstEmpty !== -1 ? firstEmpty : 0);
      }
    }

    // Check if puzzle is complete after a short delay
    setTimeout(() => {
      checkPuzzleCompletion(newGrid);
    }, 100);
  }, [selectedClue, selectedDirection, selectedCellIndex, userGrid, puzzle, isComplete, isRunning, syncClueIndex]);

  // Handle backspace
  const handleBackspace = useCallback(() => {
    if (!selectedClue || isComplete) return;

    const cells = getCellsForClue(selectedClue, selectedDirection);
    const currentCell = cells[selectedCellIndex];

    if (!currentCell) return;

    // If current cell is empty, move back and delete
    if (!userGrid[currentCell.row]?.[currentCell.col]) {
      if (selectedCellIndex > 0) {
        const prevCell = cells[selectedCellIndex - 1];
        const newGrid = userGrid.map((row, r) =>
          row.map((cell, c) => {
            if (r === prevCell.row && c === prevCell.col) {
              return '';
            }
            return cell;
          })
        );
        setUserGrid(newGrid);
        setSelectedCellIndex(selectedCellIndex - 1);
      }
    } else {
      // Delete current cell
      const newGrid = userGrid.map((row, r) =>
        row.map((cell, c) => {
          if (r === currentCell.row && c === currentCell.col) {
            return '';
          }
          return cell;
        })
      );
      setUserGrid(newGrid);
    }
  }, [selectedClue, selectedDirection, selectedCellIndex, userGrid, isComplete]);

  // Check puzzle completion
  const checkPuzzleCompletion = useCallback((grid) => {
    if (!puzzle) return;

    const result = checkPuzzle(puzzle.grid, grid);

    if (result.complete) {
      if (result.correct) {
        // Puzzle solved!
        setIsRunning(false);
        setIsComplete(true);
        recordCompletion(solveTime);
        setTimeout(() => {
          setShowCompletion(true);
        }, 800); // Show modal after cascade animation
      } else {
        // Show errors briefly
        setErrors(result.errors);
        setTimeout(() => {
          setErrors([]);
        }, 600);
      }
    }
  }, [puzzle, solveTime]);

  // Handle next word navigation
  const handleNextWord = useCallback(() => {
    if (!puzzle || isComplete) return;

    const nextWord = findNextIncompleteWord(puzzle, userGrid, selectedDirection);
    if (nextWord) {
      setSelectedClue(nextWord.clue);
      setSelectedDirection(nextWord.direction);
      syncClueIndex(nextWord.clue, nextWord.direction);
      const cells = getCellsForClue(nextWord.clue, nextWord.direction);
      const firstEmpty = cells.findIndex(cell => !userGrid[cell.row]?.[cell.col]);
      setSelectedCellIndex(firstEmpty !== -1 ? firstEmpty : 0);
    }
  }, [puzzle, userGrid, selectedDirection, isComplete, syncClueIndex]);

  // Keyboard event handler
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (showCompletion || showStats || showHelp) return;

      if (e.key === 'Backspace') {
        e.preventDefault();
        handleBackspace();
      } else if (e.key === 'Tab') {
        e.preventDefault();
        handleNextWord();
      } else if (/^[a-zA-Z]$/.test(e.key)) {
        e.preventDefault();
        handleLetterInput(e.key);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleLetterInput, handleBackspace, handleNextWord, showCompletion, showStats, showHelp]);

  if (!puzzle) {
    return <div className={styles.loading}>Loading puzzle...</div>;
  }

  const selectedCells = selectedClue
    ? getCellsForClue(selectedClue, selectedDirection)
    : [];

  return (
    <div className={styles.game}>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <button
            className={styles.menuButton}
            aria-label="Menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M2.5 5H17.5M2.5 10H17.5M2.5 15H17.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
        <div className={styles.headerCenter}>
          <h1 className={styles.title}>Onchain</h1>
          <span className={styles.byLine}>by</span>
          <img
            src="/coindesk-logo.svg"
            alt="CoinDesk"
            className={styles.logo}
          />
        </div>
        <div className={styles.headerRight}>
          <button
            className={styles.iconButton}
            onClick={() => setShowStats(true)}
            aria-label="Statistics"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M16 11V3H8V9H2V21H22V11H16ZM10 5H14V19H10V5ZM4 11H8V19H4V11ZM20 19H16V13H20V19Z"
                fill="currentColor"
              />
            </svg>
          </button>
          <button
            className={styles.iconButton}
            onClick={() => setShowHelp(true)}
            aria-label="Help"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M11 18H13V16H11V18ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12 6C9.79 6 8 7.79 8 10H10C10 8.9 10.9 8 12 8C13.1 8 14 8.9 14 10C14 12 11 11.75 11 15H13C13 12.75 16 12.5 16 10C16 7.79 14.21 6 12 6Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.gameContent}>
          <ClueBar
            currentClue={selectedClue}
            currentDirection={selectedDirection}
            onNavigatePrevious={handleNavigatePrevious}
            onNavigateNext={handleNavigateNext}
            canGoPrevious={currentClueIndex > 0}
            canGoNext={currentClueIndex < allClues.length - 1}
          />

          <Grid
            puzzle={puzzle}
            userGrid={userGrid}
            selectedCells={selectedCells}
            selectedCellIndex={selectedCellIndex}
            onCellClick={handleCellClick}
            isComplete={isComplete}
            errors={errors}
          />
        </div>
      </main>

      <Keyboard
        onLetterClick={handleLetterInput}
        onBackspace={handleBackspace}
        onNextWord={handleNextWord}
      />

      {showCompletion && (
        <CompletionModal
          puzzleNumber={puzzle.displayNumber}
          solveTime={solveTime}
          onClose={() => setShowCompletion(false)}
        />
      )}

      {showStats && (
        <StatsModal onClose={() => setShowStats(false)} />
      )}

      {showHelp && (
        <HelpModal onClose={() => setShowHelp(false)} />
      )}
    </div>
  );
}

export default Game;
