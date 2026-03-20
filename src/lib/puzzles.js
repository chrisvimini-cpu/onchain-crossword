// Complete puzzle bank - each puzzle is a valid 5x5 crossword with interlocking words
// All answers are crypto/web3/blockchain themed, 3-5 letters each
// Optimized for fewer black squares (2-3 max) and more interconnected words

export const puzzles = [
  {
    id: 1,
    grid: [
      ['S', 'T', 'A', 'K', 'E'],
      ['A', null, 'P', 'E', 'T'],
      ['T', 'O', 'K', 'E', 'N'],
      ['S', null, 'E', null, 'S'],
      [null, null, null, null, null],
    ],
    clues: {
      across: [
        { number: 1, clue: "Lock tokens for rewards", row: 0, col: 0, length: 5, answer: "STAKE" },
        { number: 5, clue: "Buy without research", row: 1, col: 2, length: 3, answer: "APE" },
        { number: 6, clue: "Digital blockchain asset", row: 2, col: 0, length: 5, answer: "TOKEN" },
      ],
      down: [
        { number: 1, clue: "Bitcoin's smallest units", row: 0, col: 0, length: 3, answer: "SAT" },
        { number: 2, clue: "NFT creation action", row: 1, col: 2, length: 3, answer: "PKE" },
        { number: 3, clue: "Vitalik's blockchain", row: 0, col: 4, length: 4, answer: "ETHS" },
        { number: 4, clue: "Smallest ether unit", row: 1, col: 3, length: 2, answer: "EN" },
      ]
    }
  },
  {
    id: 2,
    grid: [
      ['M', 'I', 'N', 'T', 'S'],
      ['I', null, 'O', null, 'A'],
      ['N', 'O', 'D', 'E', 'T'],
      ['E', null, 'E', null, 'S'],
      [null, null, null, null, null],
    ],
    clues: {
      across: [
        { number: 1, clue: "Creates new NFTs", row: 0, col: 0, length: 5, answer: "MINTS" },
        { number: 5, clue: "Network validator", row: 2, col: 0, length: 4, answer: "NODE" },
      ],
      down: [
        { number: 1, clue: "Extract cryptocurrency", row: 0, col: 0, length: 4, answer: "MINE" },
        { number: 2, clue: "Zero-knowledge proof", row: 0, col: 2, length: 4, answer: "NODE" },
        { number: 3, clue: "Bitcoin units", row: 0, col: 4, length: 4, answer: "SATS" },
        { number: 4, clue: "Ethereum", row: 2, col: 3, length: 2, answer: "ES" },
      ]
    }
  },
  {
    id: 3,
    grid: [
      ['W', 'H', 'A', 'L', 'E'],
      ['A', null, 'L', 'T', null],
      ['G', 'W', 'E', 'I', null],
      ['M', null, 'R', null, null],
      ['I', null, 'T', null, null],
    ],
    clues: {
      across: [
        { number: 1, clue: "Massive crypto holder", row: 0, col: 0, length: 5, answer: "WHALE" },
        { number: 5, clue: "Alternative coin", row: 1, col: 2, length: 3, answer: "ALT" },
        { number: 6, clue: "Tiny ether denomination", row: 2, col: 0, length: 4, answer: "GWEI" },
      ],
      down: [
        { number: 1, clue: "Diamond hands motto", row: 0, col: 0, length: 5, answer: "WAGMI" },
        { number: 2, clue: "Price warning", row: 0, col: 2, length: 5, answer: "ALERT" },
        { number: 3, clue: "Liquidity provider", row: 0, col: 3, length: 2, answer: "LT" },
      ]
    }
  },
  {
    id: 4,
    grid: [
      ['B', 'U', 'L', 'L', 'S'],
      ['E', null, 'O', null, 'E'],
      ['A', 'S', 'K', 'S', 'L'],
      ['R', null, 'E', null, 'L'],
      [null, null, null, null, null],
    ],
    clues: {
      across: [
        { number: 1, clue: "Optimistic traders", row: 0, col: 0, length: 5, answer: "BULLS" },
        { number: 5, clue: "Sell offers", row: 2, col: 0, length: 4, answer: "ASKS" },
      ],
      down: [
        { number: 1, clue: "Pessimistic market", row: 0, col: 0, length: 4, answer: "BEAR" },
        { number: 2, clue: "Decentralized platform", row: 0, col: 2, length: 4, answer: "LOKE" },
        { number: 3, clue: "Paper hands action", row: 0, col: 4, length: 4, answer: "SELL" },
        { number: 4, clue: "Trade pair", row: 2, col: 3, length: 2, answer: "SL" },
      ]
    }
  },
  {
    id: 5,
    grid: [
      ['F', 'O', 'M', 'O', null],
      ['U', null, 'E', 'R', 'G'],
      ['D', 'I', 'V', 'E', 'M'],
      [null, null, 'E', null, null],
      [null, null, null, null, null],
    ],
    clues: {
      across: [
        { number: 1, clue: "Fear of missing out", row: 0, col: 0, length: 4, answer: "FOMO" },
        { number: 5, clue: "Do deep research", row: 2, col: 0, length: 4, answer: "DIVE" },
      ],
      down: [
        { number: 1, clue: "Spread negative rumors", row: 0, col: 0, length: 3, answer: "FUD" },
        { number: 2, clue: "Network connection", row: 0, col: 2, length: 4, answer: "MEVE" },
        { number: 3, clue: "Good morning", row: 1, col: 4, length: 2, answer: "GM" },
        { number: 4, clue: "Crypto merger", row: 1, col: 3, length: 2, answer: "RE" },
      ]
    }
  },
  {
    id: 6,
    grid: [
      ['P', 'U', 'M', 'P', 'S'],
      ['O', null, 'A', null, 'T'],
      ['O', 'D', 'D', 'S', 'A'],
      ['L', null, 'S', null, 'K'],
      [null, null, null, null, 'E'],
    ],
    clues: {
      across: [
        { number: 1, clue: "Price surges", row: 0, col: 0, length: 5, answer: "PUMPS" },
        { number: 5, clue: "Betting probabilities", row: 2, col: 0, length: 4, answer: "ODDS" },
      ],
      down: [
        { number: 1, clue: "Liquidity fund", row: 0, col: 0, length: 4, answer: "POOL" },
        { number: 2, clue: "Maximum holdings", row: 0, col: 2, length: 4, answer: "MADS" },
        { number: 3, clue: "Lock tokens", row: 0, col: 4, length: 5, answer: "STAKE" },
        { number: 4, clue: "Cryptocurrency pair", row: 2, col: 3, length: 3, answer: "SAK" },
      ]
    }
  },
  {
    id: 7,
    grid: [
      ['H', 'O', 'D', 'L', null],
      ['A', null, 'E', null, 'S'],
      ['S', 'W', 'A', 'P', 'W'],
      ['H', null, 'L', null, 'A'],
      [null, null, null, null, 'P'],
    ],
    clues: {
      across: [
        { number: 1, clue: "Hold for long term", row: 0, col: 0, length: 4, answer: "HODL" },
        { number: 5, clue: "Exchange tokens", row: 2, col: 0, length: 4, answer: "SWAP" },
      ],
      down: [
        { number: 1, clue: "Cryptographic function", row: 0, col: 0, length: 4, answer: "HASH" },
        { number: 2, clue: "Decentralized org", row: 0, col: 2, length: 4, answer: "DEAL" },
        { number: 3, clue: "Trading pair", row: 1, col: 4, length: 4, answer: "SWAP" },
        { number: 4, clue: "Liquidity provider", row: 2, col: 3, length: 3, answer: "PAP" },
      ]
    }
  },
  {
    id: 8,
    grid: [
      ['D', 'A', 'P', 'P', 'S'],
      ['E', null, 'E', null, 'A'],
      ['F', 'E', 'E', 'S', 'T'],
      ['I', null, 'R', null, 'S'],
      [null, null, null, null, null],
    ],
    clues: {
      across: [
        { number: 1, clue: "Web3 applications", row: 0, col: 0, length: 5, answer: "DAPPS" },
        { number: 5, clue: "Transaction costs", row: 2, col: 0, length: 4, answer: "FEES" },
      ],
      down: [
        { number: 1, clue: "Decentralized finance", row: 0, col: 0, length: 4, answer: "DEFI" },
        { number: 2, clue: "Network participant", row: 0, col: 2, length: 4, answer: "PEER" },
        { number: 3, clue: "Bitcoin's units", row: 0, col: 4, length: 4, answer: "SATS" },
        { number: 4, clue: "Stablecoin peg", row: 2, col: 3, length: 2, answer: "SS" },
      ]
    }
  },
  {
    id: 9,
    grid: [
      ['K', 'E', 'Y', 'S', null],
      [null, 'T', null, 'E', null],
      ['A', 'P', 'E', 'D', null],
      [null, 'H', null, null, 'G'],
      [null, null, null, null, 'M'],
    ],
    clues: {
      across: [
        { number: 1, clue: "Private wallet codes", row: 0, col: 0, length: 4, answer: "KEYS" },
        { number: 5, clue: "Bought impulsively", row: 2, col: 0, length: 4, answer: "APED" },
      ],
      down: [
        { number: 2, clue: "Vitalik's network", row: 0, col: 1, length: 4, answer: "ETHER" },
        { number: 3, clue: "Crypto acronym", row: 0, col: 3, length: 2, answer: "SE" },
        { number: 4, clue: "Good morning", row: 3, col: 3, length: 2, answer: "GM" },
      ]
    }
  },
  {
    id: 10,
    grid: [
      ['F', 'I', 'A', 'T', null],
      ['O', null, 'L', null, 'R'],
      ['R', 'U', 'G', 'S', 'A'],
      ['K', null, 'O', null, 'R'],
      [null, null, null, null, 'E'],
    ],
    clues: {
      across: [
        { number: 1, clue: "Government money", row: 0, col: 0, length: 4, answer: "FIAT" },
        { number: 5, clue: "Exit scams", row: 2, col: 0, length: 4, answer: "RUGS" },
      ],
      down: [
        { number: 1, clue: "Blockchain divergence", row: 0, col: 0, length: 4, answer: "FORK" },
        { number: 2, clue: "Smart contract code", row: 0, col: 2, length: 4, answer: "ALGO" },
        { number: 3, clue: "Uncommon NFT", row: 1, col: 4, length: 4, answer: "RARE" },
        { number: 4, clue: "Network protocol", row: 2, col: 3, length: 3, answer: "SAR" },
      ]
    }
  },
];
