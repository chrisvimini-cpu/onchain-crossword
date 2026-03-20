import { useState, useEffect } from 'react';
import { getStats, formatTime } from '../lib/storage';
import { getTimeUntilNextPuzzle, formatCountdown } from '../lib/dailySelection';
import styles from './CompletionModal.module.css';

function CompletionModal({ puzzleNumber, solveTime, onClose }) {
  const [countdown, setCountdown] = useState('');
  const stats = getStats();

  useEffect(() => {
    const updateCountdown = () => {
      const { hours, minutes, seconds } = getTimeUntilNextPuzzle();
      setCountdown(formatCountdown(hours, minutes, seconds));
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleShare = async () => {
    const shareText = `🧩 The Mini: On-Chain #${puzzleNumber}
⏱️ ${formatTime(solveTime)}
🔥 ${stats.currentStreak}-day streak

coindesk.com/games/mini`;

    try {
      await navigator.clipboard.writeText(shareText);
      // Could add a "Copied!" toast here
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const isNewBest = stats.bestTime === solveTime && stats.gamesWon > 1;

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <h2 className={styles.title}>Puzzle #{puzzleNumber} Complete!</h2>

        <div className={styles.stats}>
          <div className={styles.statItem}>
            <div className={styles.statValue}>{formatTime(solveTime)}</div>
            <div className={styles.statLabel}>Solve Time</div>
            {isNewBest && <div className={styles.badge}>🏆 Personal Best!</div>}
          </div>

          <div className={styles.statItem}>
            <div className={styles.statValue}>{stats.currentStreak}</div>
            <div className={styles.statLabel}>Current Streak</div>
          </div>

          {stats.bestTime !== null && !isNewBest && (
            <div className={styles.statItem}>
              <div className={styles.statValue}>{formatTime(stats.bestTime)}</div>
              <div className={styles.statLabel}>Best Time</div>
            </div>
          )}
        </div>

        <button className={styles.shareButton} onClick={handleShare}>
          Share Results
        </button>

        <div className={styles.nextPuzzle}>
          <div className={styles.nextLabel}>Next puzzle in:</div>
          <div className={styles.nextTime}>{countdown}</div>
        </div>
      </div>
    </div>
  );
}

export default CompletionModal;
