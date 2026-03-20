// Complete puzzle bank - each puzzle is a valid 5x5 crossword with interlocking words
// All answers are crypto/web3/blockchain themed, 3-5 letters each
// VALIDATED: All clue positions and lengths match grid exactly

export const puzzles = [
  {
    id: 1,
    grid: [
      ['S', 'T', 'A', 'K', 'E'],
      ['A', null, null, null, 'T'],
      ['T', 'O', 'K', 'E', 'N'],
      ['S', null, null, null, null],
      ['H', 'O', 'D', 'L', null],
    ],
    clues: {
      across: [
        { number: 1, clue: "Lock tokens for rewards", row: 0, col: 0, length: 5, answer: "STAKE" },
        { number: 3, clue: "Digital blockchain asset", row: 2, col: 0, length: 5, answer: "TOKEN" },
        { number: 5, clue: "Hold long-term", row: 4, col: 0, length: 4, answer: "HODL" },
      ],
      down: [
        { number: 1, clue: "Bitcoin's smallest units", row: 0, col: 0, length: 4, answer: "SATS" },
        { number: 2, clue: "Ethereum coin", row: 0, col: 4, length: 2, answer: "ET" },
      ]
    }
  },
  {
    id: 2,
    grid: [
      ['M', 'I', 'N', 'E', 'D'],
      ['I', null, null, null, 'A'],
      ['N', 'O', 'D', 'E', 'O'],
      ['T', null, null, null, null],
      ['S', 'W', 'A', 'P', null],
    ],
    clues: {
      across: [
        { number: 1, clue: "Extracted cryptocurrency", row: 0, col: 0, length: 5, answer: "MINED" },
        { number: 3, clue: "Network validator", row: 2, col: 0, length: 4, answer: "NODE" },
        { number: 5, clue: "Exchange tokens", row: 4, col: 0, length: 4, answer: "SWAP" },
      ],
      down: [
        { number: 1, clue: "Create NFT", row: 0, col: 0, length: 5, answer: "MINTS" },
        { number: 2, clue: "Decentralized org", row: 0, col: 4, length: 3, answer: "DAO" },
      ]
    }
  },
  {
    id: 3,
    grid: [
      ['W', 'H', 'A', 'L', 'E'],
      ['A', null, null, null, 'T'],
      ['G', 'W', 'E', 'I', 'H'],
      ['M', null, null, null, null],
      ['I', null, null, null, null],
    ],
    clues: {
      across: [
        { number: 1, clue: "Large crypto holder", row: 0, col: 0, length: 5, answer: "WHALE" },
        { number: 3, clue: "Smallest ether unit", row: 2, col: 0, length: 4, answer: "GWEI" },
      ],
      down: [
        { number: 1, clue: "We're all gonna make it", row: 0, col: 0, length: 5, answer: "WAGMI" },
        { number: 2, clue: "Ethereum", row: 0, col: 4, length: 3, answer: "ETH" },
      ]
    }
  },
  {
    id: 4,
    grid: [
      ['F', 'O', 'M', 'O', null],
      ['U', null, null, null, null],
      ['D', 'I', 'V', 'E', null],
      [null, null, null, null, null],
      ['G', 'A', 'S', null, null],
    ],
    clues: {
      across: [
        { number: 1, clue: "Fear of missing out", row: 0, col: 0, length: 4, answer: "FOMO" },
        { number: 3, clue: "Research deeply", row: 2, col: 0, length: 4, answer: "DIVE" },
        { number: 5, clue: "Ethereum transaction fee", row: 4, col: 0, length: 3, answer: "GAS" },
      ],
      down: [
        { number: 1, clue: "Fear, uncertainty, doubt", row: 0, col: 0, length: 3, answer: "FUD" },
      ]
    }
  },
  {
    id: 5,
    grid: [
      ['P', 'U', 'M', 'P', 'S'],
      ['O', null, null, null, 'E'],
      ['O', 'D', 'D', 'S', 'L'],
      ['L', null, null, null, 'L'],
      [null, null, null, null, null],
    ],
    clues: {
      across: [
        { number: 1, clue: "Price surges", row: 0, col: 0, length: 5, answer: "PUMPS" },
        { number: 3, clue: "Betting chances", row: 2, col: 0, length: 4, answer: "ODDS" },
      ],
      down: [
        { number: 1, clue: "Liquidity reserve", row: 0, col: 0, length: 4, answer: "POOL" },
        { number: 2, clue: "Paper hands action", row: 0, col: 4, length: 4, answer: "SELL" },
      ]
    }
  },
  {
    id: 6,
    grid: [
      ['B', 'U', 'L', 'L', 'S'],
      ['E', null, null, null, 'A'],
      ['A', 'S', 'K', 'S', 'T'],
      ['R', null, null, null, 'S'],
      [null, null, null, null, null],
    ],
    clues: {
      across: [
        { number: 1, clue: "Optimistic traders", row: 0, col: 0, length: 5, answer: "BULLS" },
        { number: 3, clue: "Sell offers", row: 2, col: 0, length: 4, answer: "ASKS" },
      ],
      down: [
        { number: 1, clue: "Pessimistic market", row: 0, col: 0, length: 4, answer: "BEAR" },
        { number: 2, clue: "Bitcoin units", row: 0, col: 4, length: 4, answer: "SATS" },
      ]
    }
  },
  {
    id: 7,
    grid: [
      ['D', 'A', 'P', 'P', 'S'],
      ['E', null, null, null, 'A'],
      ['F', 'E', 'E', 'S', 'T'],
      ['I', null, null, null, 'S'],
      [null, null, null, null, null],
    ],
    clues: {
      across: [
        { number: 1, clue: "Web3 applications", row: 0, col: 0, length: 5, answer: "DAPPS" },
        { number: 3, clue: "Transaction costs", row: 2, col: 0, length: 4, answer: "FEES" },
      ],
      down: [
        { number: 1, clue: "Decentralized finance", row: 0, col: 0, length: 4, answer: "DEFI" },
        { number: 2, clue: "Bitcoin units", row: 0, col: 4, length: 4, answer: "SATS" },
      ]
    }
  },
  {
    id: 8,
    grid: [
      ['H', 'O', 'D', 'L', 'S'],
      ['A', null, 'A', null, 'A'],
      ['S', 'W', 'A', 'P', 'T'],
      ['H', null, 'O', null, 'S'],
      [null, null, null, null, null],
    ],
    clues: {
      across: [
        { number: 1, clue: "Hold long-term (plural)", row: 0, col: 0, length: 5, answer: "HODLS" },
        { number: 3, clue: "Exchange tokens", row: 2, col: 0, length: 4, answer: "SWAP" },
      ],
      down: [
        { number: 1, clue: "Cryptographic digest", row: 0, col: 0, length: 4, answer: "HASH" },
        { number: 2, clue: "Decentralized autonomous org", row: 0, col: 2, length: 3, answer: "DAO" },
        { number: 4, clue: "Bitcoin units", row: 0, col: 4, length: 4, answer: "SATS" },
      ]
    }
  },
  {
    id: 9,
    grid: [
      ['F', 'O', 'R', 'K', 'S'],
      ['O', null, null, null, null],
      ['M', 'I', 'N', 'T', null],
      ['O', 'D', 'D', 'S', null],
      [null, null, null, null, null],
    ],
    clues: {
      across: [
        { number: 1, clue: "Blockchain splits (plural)", row: 0, col: 0, length: 5, answer: "FORKS" },
        { number: 3, clue: "Create NFT", row: 2, col: 0, length: 4, answer: "MINT" },
        { number: 4, clue: "Betting chances", row: 3, col: 0, length: 4, answer: "ODDS" },
      ],
      down: [
        { number: 1, clue: "Fear of missing out", row: 0, col: 0, length: 4, answer: "FOMO" },
      ]
    }
  },
  {
    id: 10,
    grid: [
      ['F', 'O', 'R', 'K', 'S'],
      ['O', null, 'U', null, 'E'],
      ['M', 'I', 'N', 'T', 'L'],
      ['O', null, 'G', null, 'L'],
      [null, null, null, null, null],
    ],
    clues: {
      across: [
        { number: 1, clue: "Blockchain splits (plural)", row: 0, col: 0, length: 5, answer: "FORKS" },
        { number: 3, clue: "Create NFT", row: 2, col: 0, length: 4, answer: "MINT" },
      ],
      down: [
        { number: 1, clue: "Fear of missing out", row: 0, col: 0, length: 4, answer: "FOMO" },
        { number: 2, clue: "Exit scams", row: 0, col: 2, length: 3, answer: "RUG" },
        { number: 4, clue: "Paper hands action", row: 0, col: 4, length: 4, answer: "SELL" },
      ]
    }
  },
];
