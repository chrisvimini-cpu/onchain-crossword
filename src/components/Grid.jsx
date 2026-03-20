import { useMemo } from 'react';
import Cell from './Cell';
import styles from './Grid.module.css';

function Grid({
  puzzle,
  userGrid,
  selectedCells,
  selectedCellIndex,
  onCellClick,
  isComplete,
  errors
}) {
  // Build clue numbers map
  const clueNumbers = useMemo(() => {
    const numbers = {};

    // Process across clues
    puzzle.clues.across.forEach(clue => {
      const key = `${clue.row}-${clue.col}`;
      numbers[key] = clue.number;
    });

    // Process down clues
    puzzle.clues.down.forEach(clue => {
      const key = `${clue.row}-${clue.col}`;
      // If a number already exists, it means both across and down start here
      if (!numbers[key]) {
        numbers[key] = clue.number;
      }
    });

    return numbers;
  }, [puzzle]);

  // Check if cell is selected
  const isCellSelected = (row, col) => {
    return selectedCells.some((cell, idx) =>
      cell.row === row && cell.col === col && idx === selectedCellIndex
    );
  };

  // Check if cell is in selected word but not active
  const isCellInWord = (row, col) => {
    return selectedCells.some((cell, idx) =>
      cell.row === row && cell.col === col && idx !== selectedCellIndex
    );
  };

  // Check if cell has an error
  const isCellError = (row, col) => {
    return errors.some(error => error.row === row && error.col === col);
  };

  return (
    <div className={styles.gridContainer}>
      <div className={styles.grid}>
        {puzzle.grid.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.row}>
            {row.map((cell, colIndex) => {
              const key = `${rowIndex}-${colIndex}`;
              const clueNumber = clueNumbers[key];
              const isBlack = cell === null;
              const value = userGrid[rowIndex]?.[colIndex] || '';
              const isSelected = isCellSelected(rowIndex, colIndex);
              const isInWord = isCellInWord(rowIndex, colIndex);
              const hasError = isCellError(rowIndex, colIndex);

              return (
                <Cell
                  key={key}
                  value={value}
                  isBlack={isBlack}
                  isSelected={isSelected}
                  isInWord={isInWord}
                  hasError={hasError}
                  clueNumber={clueNumber}
                  isComplete={isComplete}
                  onClick={() => onCellClick(rowIndex, colIndex)}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Grid;
