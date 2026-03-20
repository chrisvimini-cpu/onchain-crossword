import styles from './HelpModal.module.css';

function HelpModal({ onClose }) {
  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <h2 className={styles.title}>How to Play</h2>

        <div className={styles.content}>
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Objective</h3>
            <p className={styles.text}>
              Fill the 5×5 crossword grid with crypto and blockchain terms. Solve it as fast as you can!
            </p>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>How to Play</h3>
            <ul className={styles.list}>
              <li>Tap a clue or tap a cell in the grid to select a word</li>
              <li>Type letters using the keyboard to fill in your answer</li>
              <li>Tap the active cell or tap the same clue again to switch between Across and Down</li>
              <li>Use the arrow key to jump to the next word</li>
              <li>Use backspace to delete letters</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Completing the Puzzle</h3>
            <p className={styles.text}>
              The puzzle checks automatically when all cells are filled. If you see a brief red flash, some answers are incorrect—keep trying! When you solve it correctly, you'll see a celebration animation and your completion time.
            </p>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>New Puzzle</h3>
            <p className={styles.text}>
              A new puzzle is available every day at midnight UTC. Play daily to maintain your streak!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelpModal;
