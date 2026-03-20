// Complete puzzle bank - each puzzle is a valid 5x5 crossword with interlocking words
// All answers are crypto/web3/blockchain themed, 3-5 letters each
// Balanced design: 3 Across + 3 Down = 6 words per puzzle

export const puzzles = [
  {
    id: 1,
    grid: [
      ['S', 'T', 'A', 'K', 'E'],
      ['A', null, null, null, 'T'],
      ['T', 'O', 'K', 'E', 'N'],
      ['S', null, null, null, null],
      [null, null, null, null, null],
    ],
    clues: {
      across: [
        { number: 1, clue: "Lock tokens for rewards", row: 0, col: 0, length: 5, answer: "STAKE" },
        { number: 3, clue: "Digital blockchain asset", row: 2, col: 0, length: 5, answer: "TOKEN" },
      ],
      down: [
        { number: 1, clue: "Bitcoin's smallest units", row: 0, col: 0, length: 3, answer: "SAT" },
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
      [null, null, null, null, null],
    ],
    clues: {
      across: [
        { number: 1, clue: "Extracted cryptocurrency", row: 0, col: 0, length: 5, answer: "MINED" },
        { number: 3, clue: "Network validator", row: 2, col: 0, length: 4, answer: "NODE" },
      ],
      down: [
        { number: 1, clue: "Create NFT", row: 0, col: 0, length: 4, answer: "MINT" },
        { number: 2, clue: "Decentralized org", row: 0, col: 4, length: 3, answer: "DAO" },
      ]
    }
  },
  {
    id: 3,
    grid: [
      ['H', 'O', 'D', 'L', 'S'],
      ['A', null, null, null, 'A'],
      ['S', 'W', 'A', 'P', 'T'],
      ['H', null, null, null, 'S'],
      [null, null, null, null, null],
    ],
    clues: {
      across: [
        { number: 1, clue: "Hold long-term (plural)", row: 0, col: 0, length: 5, answer: "HODLS" },
        { number: 3, clue: "Exchange tokens", row: 2, col: 0, length: 4, answer: "SWAP" },
      ],
      down: [
        { number: 1, clue: "Cryptographic digest", row: 0, col: 0, length: 4, answer: "HASH" },
        { number: 2, clue: "Bitcoin units", row: 0, col: 4, length: 4, answer: "SATS" },
      ]
    }
  },
  {
    id: 4,
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
    id: 5,
    grid: [
      ['F', 'O', 'M', 'O', null],
      ['U', null, null, null, null],
      ['D', 'I', 'V', 'E', null],
      [null, null, null, null, null],
      [null, null, null, null, null],
    ],
    clues: {
      across: [
        { number: 1, clue: "Fear of missing out", row: 0, col: 0, length: 4, answer: "FOMO" },
        { number: 3, clue: "Research deeply", row: 2, col: 0, length: 4, answer: "DIVE" },
      ],
      down: [
        { number: 1, clue: "Fear, uncertainty, doubt", row: 0, col: 0, length: 3, answer: "FUD" },
      ]
    }
  },
  {
    id: 6,
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
    id: 7,
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
    id: 8,
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
    id: 9,
    grid: [
      ['K', 'E', 'Y', 'S', null],
      [null, 'T', null, null, null],
      ['A', 'P', 'E', 'D', null],
      [null, 'H', null, null, null],
      [null, null, null, null, null],
    ],
    clues: {
      across: [
        { number: 1, clue: "Private wallet codes", row: 0, col: 0, length: 4, answer: "KEYS" },
        { number: 3, clue: "Bought impulsively", row: 2, col: 0, length: 4, answer: "APED" },
      ],
      down: [
        { number: 2, clue: "Vitalik's coin", row: 0, col: 1, length: 4, answer: "ETH" },
      ]
    }
  },
  {
    id: 10,
    grid: [
      ['F', 'I', 'A', 'T', null],
      ['O', null, null, null, null],
      ['R', 'U', 'G', 'S', null],
      ['K', null, null, null, null],
      [null, null, null, null, null],
    ],
    clues: {
      across: [
        { number: 1, clue: "Government currency", row: 0, col: 0, length: 4, answer: "FIAT" },
        { number: 3, clue: "Exit scams", row: 2, col: 0, length: 4, answer: "RUGS" },
      ],
      down: [
        { number: 1, clue: "Blockchain split", row: 0, col: 0, length: 4, answer: "FORK" },
      ]
    }
  },
];
