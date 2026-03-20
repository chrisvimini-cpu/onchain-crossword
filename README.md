# The Mini: On-Chain

A daily 5×5 crypto crossword puzzle by CoinDesk.

## Features

- **Daily Puzzles**: New crypto-themed crossword every day at midnight UTC
- **Mobile-First**: Optimized for portrait mode on phones with virtual keyboard
- **Streak Tracking**: Maintain your daily solving streak
- **Statistics**: Track your solve times, streaks, and personal bests
- **Share Results**: Share your completion time and streak
- **PWA-Ready**: Can be installed as a progressive web app

## Tech Stack

- React 18 with hooks
- Vite for build tooling
- CSS Modules for styling
- LocalStorage for state persistence
- No external game libraries

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The game will be available at http://localhost:5174

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Customization

### Adding Custom Fonts

The game uses the "Family" font from the CoinDesk brand system. Place the font files in `public/fonts/`:

- `Family-Regular.woff2`
- `Family-Bold.woff2`

The game will fall back gracefully to system fonts if the custom fonts are not present.

### Adding More Puzzles

Edit `src/lib/puzzles.js` to add more puzzle objects. Each puzzle must have:

- A unique `id`
- A 5×5 `grid` array (use `null` for black squares)
- `clues` with `across` and `down` arrays
- Each clue needs: `number`, `clue`, `row`, `col`, `length`, and `answer`

## Game Mechanics

- Tap a clue or cell to select a word
- Type letters to fill in answers
- Cursor auto-advances within the current word
- Tap the same clue or active cell to toggle between Across/Down
- Wrong answers flash briefly in red when the grid is full
- Correct completion triggers a cascade animation in CoinDesk Yellow
- All progress is saved automatically to localStorage

## License

© 2026 CoinDesk. All rights reserved.
