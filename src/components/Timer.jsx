import { formatTime } from '../lib/storage';
import styles from './Timer.module.css';

function Timer({ time, isRunning }) {
  return (
    <div className={styles.timer}>
      {formatTime(time)}
    </div>
  );
}

export default Timer;
