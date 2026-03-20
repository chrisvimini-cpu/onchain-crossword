import { getStats, formatTime, getAverageSolveTime } from '../lib/storage';
import styles from './StatsModal.module.css';

function StatsModal({ onClose }) {
  const stats = getStats();
  const avgTime = getAverageSolveTime();

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <h2 className={styles.title}>Statistics</h2>

        <div className={styles.stats}>
          <div className={styles.statBox}>
            <div className={styles.statValue}>{stats.gamesPlayed}</div>
            <div className={styles.statLabel}>Played</div>
          </div>

          <div className={styles.statBox}>
            <div className={styles.statValue}>{stats.gamesWon}</div>
            <div className={styles.statLabel}>Won</div>
          </div>

          <div className={styles.statBox}>
            <div className={styles.statValue}>{stats.currentStreak}</div>
            <div className={styles.statLabel}>Current Streak</div>
          </div>

          <div className={styles.statBox}>
            <div className={styles.statValue}>{stats.maxStreak}</div>
            <div className={styles.statLabel}>Max Streak</div>
          </div>
        </div>

        <div className={styles.times}>
          <div className={styles.timeRow}>
            <span className={styles.timeLabel}>Best Time:</span>
            <span className={styles.timeValue}>
              {stats.bestTime !== null ? formatTime(stats.bestTime) : '--'}
            </span>
          </div>

          <div className={styles.timeRow}>
            <span className={styles.timeLabel}>Average Time:</span>
            <span className={styles.timeValue}>
              {avgTime > 0 ? formatTime(avgTime) : '--'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatsModal;
