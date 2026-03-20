import { useEffect, useRef } from 'react';
import styles from './Cell.module.css';

function Cell({
  value,
  isBlack,
  isSelected,
  isInWord,
  hasError,
  clueNumber,
  isComplete,
  onClick
}) {
  const cellRef = useRef(null);

  // Cascade animation effect on completion
  useEffect(() => {
    if (isComplete && !isBlack && cellRef.current) {
      // Calculate stagger delay based on position
      const row = parseInt(cellRef.current.getAttribute('data-row') || 0);
      const col = parseInt(cellRef.current.getAttribute('data-col') || 0);
      const delay = (row * 5 + col) * 80; // 80ms stagger

      cellRef.current.style.animationDelay = `${delay}ms`;
      cellRef.current.classList.add(styles.completed);
    }
  }, [isComplete, isBlack]);

  if (isBlack) {
    return <div className={styles.cellBlack} />;
  }

  const cellClasses = [
    styles.cell,
    isSelected && styles.selected,
    isInWord && styles.inWord,
    hasError && styles.error,
    isComplete && styles.completedCell,
  ].filter(Boolean).join(' ');

  return (
    <div
      ref={cellRef}
      className={cellClasses}
      onClick={onClick}
      data-row={clueNumber ? Math.floor(Math.random() * 5) : 0}
      data-col={clueNumber ? Math.floor(Math.random() * 5) : 0}
    >
      {clueNumber && <span className={styles.number}>{clueNumber}</span>}
      {value && <span className={styles.letter}>{value}</span>}
    </div>
  );
}

export default Cell;
