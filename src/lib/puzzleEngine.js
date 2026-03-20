// Puzzle validation and grid utilities

/**
 * Build a map of cells to their associated clues
 * @param {Object} puzzle - The puzzle object
 * @returns {Object} Map with structure: { "row-col": { across: clue, down: clue } }
 */
export function buildCellClueMap(puzzle) {
  const map = {};

  const processClue = (clue, direction) => {
    for (let i = 0; i < clue.length; i++) {
      const row = direction === 'across' ? clue.row : clue.row + i;
      const col = direction === 'across' ? clue.col + i : clue.col;
      const key = `${row}-${col}`;

      if (!map[key]) {
        map[key] = {};
      }
      map[key][direction] = clue;
    }
  };

  puzzle.clues.across.forEach(clue => processClue(clue, 'across'));
  puzzle.clues.down.forEach(clue => processClue(clue, 'down'));

  return map;
}

/**
 * Get all cells that belong to a specific clue
 * @param {Object} clue - The clue object
 * @param {string} direction - 'across' or 'down'
 * @returns {Array} Array of {row, col} objects
 */
export function getCellsForClue(clue, direction) {
  const cells = [];
  for (let i = 0; i < clue.length; i++) {
    cells.push({
      row: direction === 'across' ? clue.row : clue.row + i,
      col: direction === 'across' ? clue.col + i : clue.col
    });
  }
  return cells;
}

/**
 * Check if the puzzle is complete and correct
 * @param {Array} grid - The solution grid
 * @param {Array} userGrid - The user's current grid
 * @returns {Object} { complete: boolean, correct: boolean, errors: Array }
 */
export function checkPuzzle(grid, userGrid) {
  const errors = [];
  let filledCells = 0;
  let totalCells = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] !== null) {
        totalCells++;
        const userValue = userGrid[row]?.[col];

        if (userValue) {
          filledCells++;
          if (userValue !== grid[row][col]) {
            errors.push({ row, col });
          }
        }
      }
    }
  }

  const complete = filledCells === totalCells;
  const correct = complete && errors.length === 0;

  return { complete, correct, errors };
}

/**
 * Get the next empty cell in the current word
 * @param {Array} cells - Array of cell positions
 * @param {Array} userGrid - The user's current grid
 * @param {number} currentIndex - Current cell index within the word
 * @returns {number} Index of next empty cell, or -1 if none
 */
export function getNextEmptyCell(cells, userGrid, currentIndex) {
  for (let i = currentIndex + 1; i < cells.length; i++) {
    const cell = cells[i];
    if (!userGrid[cell.row]?.[cell.col]) {
      return i;
    }
  }
  return -1;
}

/**
 * Get the previous cell in the current word
 * @param {number} currentIndex - Current cell index within the word
 * @returns {number} Index of previous cell, or 0 if at start
 */
export function getPreviousCell(currentIndex) {
  return Math.max(0, currentIndex - 1);
}

/**
 * Find the next incomplete word
 * @param {Object} puzzle - The puzzle object
 * @param {Array} userGrid - The user's current grid
 * @param {string} preferredDirection - Preferred direction to search
 * @returns {Object|null} { clue, direction } or null
 */
export function findNextIncompleteWord(puzzle, userGrid, preferredDirection = 'across') {
  const directions = preferredDirection === 'across'
    ? ['across', 'down']
    : ['down', 'across'];

  for (const direction of directions) {
    for (const clue of puzzle.clues[direction]) {
      const cells = getCellsForClue(clue, direction);
      const isComplete = cells.every(cell =>
        userGrid[cell.row]?.[cell.col]
      );

      if (!isComplete) {
        return { clue, direction };
      }
    }
  }

  return null;
}
