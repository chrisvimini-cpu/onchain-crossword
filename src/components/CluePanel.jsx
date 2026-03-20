import { useEffect, useRef } from 'react';
import styles from './CluePanel.module.css';

function CluePanel({ puzzle, selectedClue, selectedDirection, onClueClick }) {
  const acrossListRef = useRef(null);
  const downListRef = useRef(null);

  // Scroll selected clue into view
  useEffect(() => {
    if (selectedClue) {
      const listRef = selectedDirection === 'across' ? acrossListRef : downListRef;
      const clueElement = listRef.current?.querySelector(`[data-clue="${selectedClue.number}"]`);
      if (clueElement) {
        clueElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  }, [selectedClue, selectedDirection]);

  const renderClueList = (clues, direction) => {
    return clues.map(clue => {
      const isSelected = selectedClue?.number === clue.number && selectedDirection === direction;
      return (
        <div
          key={clue.number}
          className={`${styles.clueItem} ${isSelected ? styles.selected : ''}`}
          onClick={() => onClueClick(clue, direction)}
          data-clue={clue.number}
        >
          <span className={styles.clueNumber}>{clue.number}.</span>
          <span className={styles.clueText}>{clue.clue}</span>
        </div>
      );
    });
  };

  return (
    <div className={styles.cluePanel}>
      <div className={styles.clueLists}>
        <div className={styles.clueSection}>
          <h3 className={styles.clueHeading}>Across</h3>
          <div className={styles.clueList} ref={acrossListRef}>
            {renderClueList(puzzle.clues.across, 'across')}
          </div>
        </div>

        <div className={styles.clueSection}>
          <h3 className={styles.clueHeading}>Down</h3>
          <div className={styles.clueList} ref={downListRef}>
            {renderClueList(puzzle.clues.down, 'down')}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CluePanel;
