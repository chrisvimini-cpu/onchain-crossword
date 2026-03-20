import { useState, useEffect, useCallback, useRef } from 'react';
import Grid from './Grid';
import CluePanel from './CluePanel';
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
  const [cellClueMap, setCellClueMap] = useState({});
  const [isComplete, setIsComplete] = useState(false);
  const [showCompletion, setShowCompletion] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [solveTime, setSolveTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [errors, setErrors] = useState([]);
  const timerRef = useRef(null);

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
  }, [puzzle, cellClueMap, selectedClue, selectedDirection, selectedCellIndex, isComplete, isRunning]);

  // Handle clue selection
  const handleClueClick = useCallback((clue, direction) => {
    if (isComplete) return;

    // Start timer on first interaction
    if (!isRunning) {
      setIsRunning(true);
    }

    setSelectedClue(clue);
    setSelectedDirection(direction);

    // Find first empty cell in this clue, or select first cell
    const cells = getCellsForClue(clue, direction);
    let targetIndex = 0;

    for (let i = 0; i < cells.length; i++) {
      if (!userGrid[cells[i].row]?.[cells[i].col]) {
        targetIndex = i;
        break;
      }
    }

    setSelectedCellIndex(targetIndex);
  }, [userGrid, isComplete, isRunning]);

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
        const nextCells = getCellsForClue(nextWord.clue, nextWord.direction);
        const firstEmpty = nextCells.findIndex(cell => !newGrid[cell.row]?.[cell.col]);
        setSelectedCellIndex(firstEmpty !== -1 ? firstEmpty : 0);
      }
    }

    // Check if puzzle is complete after a short delay
    setTimeout(() => {
      checkPuzzleCompletion(newGrid);
    }, 100);
  }, [selectedClue, selectedDirection, selectedCellIndex, userGrid, puzzle, isComplete, isRunning]);

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
      const cells = getCellsForClue(nextWord.clue, nextWord.direction);
      const firstEmpty = cells.findIndex(cell => !userGrid[cell.row]?.[cell.col]);
      setSelectedCellIndex(firstEmpty !== -1 ? firstEmpty : 0);
    }
  }, [puzzle, userGrid, selectedDirection, isComplete]);

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
          <h1 className={styles.title}>The Mini: On-Chain</h1>
          <span className={styles.by}>by</span>
          <svg className={styles.logo} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="#F8BF1E"/>
            <text x="12" y="17" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#000">C</text>
          </svg>
        </div>
        <div className={styles.headerRight}>
          <Timer time={solveTime} isRunning={isRunning} />
          <button
            className={styles.iconButton}
            onClick={() => setShowStats(true)}
            aria-label="Stats"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="13" width="4" height="8" />
              <rect x="10" y="8" width="4" height="13" />
              <rect x="17" y="3" width="4" height="18" />
            </svg>
          </button>
          <button
            className={styles.iconButton}
            onClick={() => setShowHelp(true)}
            aria-label="Help"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          </button>
        </div>
      </header>

      <main className={styles.main}>
        <Grid
          puzzle={puzzle}
          userGrid={userGrid}
          selectedCells={selectedCells}
          selectedCellIndex={selectedCellIndex}
          onCellClick={handleCellClick}
          isComplete={isComplete}
          errors={errors}
        />

        <CluePanel
          puzzle={puzzle}
          selectedClue={selectedClue}
          selectedDirection={selectedDirection}
          onClueClick={handleClueClick}
        />

        <Keyboard
          onLetterClick={handleLetterInput}
          onBackspace={handleBackspace}
          onNextWord={handleNextWord}
        />
      </main>

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
