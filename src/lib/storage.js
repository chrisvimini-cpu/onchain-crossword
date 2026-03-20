import { getCurrentDateUTC } from './dailySelection.js';

const STORAGE_KEYS = {
  STATS: 'mini-onchain-stats',
  PUZZLE_STATE: 'mini-onchain-puzzle-state',
  LAST_COMPLETED: 'mini-onchain-last-completed',
};

/**
 * Get stats from localStorage
 */
export function getStats() {
  try {
    const stats = localStorage.getItem(STORAGE_KEYS.STATS);
    if (stats) {
      return JSON.parse(stats);
    }
  } catch (e) {
    console.error('Error reading stats:', e);
  }

  return {
    gamesPlayed: 0,
    gamesWon: 0,
    currentStreak: 0,
    maxStreak: 0,
    totalTime: 0, // in seconds
    bestTime: null, // in seconds
  };
}

/**
 * Save stats to localStorage
 */
export function saveStats(stats) {
  try {
    localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(stats));
  } catch (e) {
    console.error('Error saving stats:', e);
  }
}

/**
 * Get puzzle state for today
 */
export function getPuzzleState(puzzleId) {
  try {
    const dateKey = getCurrentDateUTC();
    const stateKey = `${STORAGE_KEYS.PUZZLE_STATE}-${dateKey}`;
    const state = localStorage.getItem(stateKey);

    if (state) {
      const parsed = JSON.parse(state);
      if (parsed.puzzleId === puzzleId) {
        return parsed;
      }
    }
  } catch (e) {
    console.error('Error reading puzzle state:', e);
  }

  return null;
}

/**
 * Save puzzle state for today
 */
export function savePuzzleState(puzzleId, userGrid, completed = false, time = 0) {
  try {
    const dateKey = getCurrentDateUTC();
    const stateKey = `${STORAGE_KEYS.PUZZLE_STATE}-${dateKey}`;

    const state = {
      puzzleId,
      userGrid,
      completed,
      time,
      date: dateKey,
    };

    localStorage.setItem(stateKey, JSON.stringify(state));
  } catch (e) {
    console.error('Error saving puzzle state:', e);
  }
}

/**
 * Record a completed puzzle and update stats
 */
export function recordCompletion(time) {
  const stats = getStats();
  const today = getCurrentDateUTC();
  const lastCompleted = localStorage.getItem(STORAGE_KEYS.LAST_COMPLETED);

  // Update games played and won
  stats.gamesPlayed += 1;
  stats.gamesWon += 1;
  stats.totalTime += time;

  // Update best time
  if (stats.bestTime === null || time < stats.bestTime) {
    stats.bestTime = time;
  }

  // Update streak
  if (lastCompleted) {
    const lastDate = new Date(lastCompleted);
    const todayDate = new Date(today);
    const daysDiff = Math.floor((todayDate - lastDate) / (1000 * 60 * 60 * 24));

    if (daysDiff === 1) {
      // Consecutive day
      stats.currentStreak += 1;
    } else if (daysDiff > 1) {
      // Streak broken
      stats.currentStreak = 1;
    }
    // If daysDiff === 0, already completed today (shouldn't happen but handle it)
  } else {
    // First game ever
    stats.currentStreak = 1;
  }

  // Update max streak
  if (stats.currentStreak > stats.maxStreak) {
    stats.maxStreak = stats.currentStreak;
  }

  // Save updated stats and last completed date
  saveStats(stats);
  localStorage.setItem(STORAGE_KEYS.LAST_COMPLETED, today);

  return stats;
}

/**
 * Get average solve time
 */
export function getAverageSolveTime() {
  const stats = getStats();
  if (stats.gamesWon === 0) return 0;
  return Math.round(stats.totalTime / stats.gamesWon);
}

/**
 * Check if today's puzzle is already completed
 */
export function isTodayCompleted() {
  const today = getCurrentDateUTC();
  const lastCompleted = localStorage.getItem(STORAGE_KEYS.LAST_COMPLETED);
  return lastCompleted === today;
}

/**
 * Format time in M:SS format
 */
export function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

/**
 * Clean up old puzzle states (keep only last 7 days)
 */
export function cleanupOldStates() {
  try {
    const keys = Object.keys(localStorage);
    const today = new Date();

    keys.forEach(key => {
      if (key.startsWith(STORAGE_KEYS.PUZZLE_STATE)) {
        const dateStr = key.split('-').slice(-3).join('-'); // Extract YYYY-MM-DD
        const stateDate = new Date(dateStr);
        const daysDiff = Math.floor((today - stateDate) / (1000 * 60 * 60 * 24));

        if (daysDiff > 7) {
          localStorage.removeItem(key);
        }
      }
    });
  } catch (e) {
    console.error('Error cleaning up old states:', e);
  }
}
