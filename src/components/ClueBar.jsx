import styles from './ClueBar.module.css';

function ClueBar({
  currentClue,
  currentDirection,
  onNavigatePrevious,
  onNavigateNext,
  canGoPrevious,
  canGoNext
}) {
  if (!currentClue) return null;

  const directionLabel = currentDirection === 'across' ? 'ACROSS' : 'DOWN';

  return (
    <div className={styles.clueBar}>
      <button
        className={styles.arrowButton}
        onClick={onNavigatePrevious}
        disabled={!canGoPrevious}
        aria-label="Previous clue"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M12.5 15L7.5 10L12.5 5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div className={styles.clueContent}>
        <div className={styles.clueHeader}>
          {currentClue.number} {directionLabel}
        </div>
        <div className={styles.clueText}>
          {currentClue.clue}
        </div>
      </div>

      <button
        className={styles.arrowButton}
        onClick={onNavigateNext}
        disabled={!canGoNext}
        aria-label="Next clue"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M7.5 5L12.5 10L7.5 15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}

export default ClueBar;
