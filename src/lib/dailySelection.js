import { puzzles } from './puzzles.js';

// Start date for puzzle rotation (March 1, 2026)
const START_DATE = new Date('2026-03-01T00:00:00Z');

/**
 * Get the current UTC date string (YYYY-MM-DD)
 */
export function getCurrentDateUTC() {
  const now = new Date();
  return now.toISOString().split('T')[0];
}

/**
 * Get the number of days since the start date
 */
export function getDaysSinceStart(dateString = null) {
  const date = dateString ? new Date(dateString + 'T00:00:00Z') : new Date();
  const diffTime = date - START_DATE;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return Math.max(0, diffDays);
}

/**
 * Get today's puzzle
 */
export function getTodaysPuzzle() {
  const days = getDaysSinceStart();
  const puzzleIndex = days % puzzles.length;
  const puzzle = puzzles[puzzleIndex];

  // Return puzzle with its display number
  return {
    ...puzzle,
    displayNumber: days + 1, // Display number starts at 1
  };
}

/**
 * Get time until next puzzle (midnight UTC)
 */
export function getTimeUntilNextPuzzle() {
  const now = new Date();
  const tomorrow = new Date(now);
  tomorrow.setUTCHours(24, 0, 0, 0);

  const diff = tomorrow - now;
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { hours, minutes, seconds, totalMs: diff };
}

/**
 * Format countdown time
 */
export function formatCountdown(hours, minutes, seconds) {
  return `${hours}h ${minutes}m ${seconds}s`;
}
