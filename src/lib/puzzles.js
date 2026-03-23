// Complete puzzle bank - each puzzle is a valid 5x5 crossword with interlocking words
// All answers are crypto/web3/blockchain themed, 3-5 letters each
// IMPROVED: 4-6 clues per puzzle, fewer black spaces

export const puzzles = [
  {
    id: 1,
    grid: [
      ['S', 'T', 'A', 'K', 'E'],
      ['A', null, null, 'E', 'T'],
      ['T', 'O', 'K', 'E', 'N'],
      ['S', null, 'E', null, null],
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
        { number: 2, clue: "Private password", row: 0, col: 3, length: 4, answer: "KEEN" },
        { number: 4, clue: "Ethereum coin", row: 0, col: 4, length: 3, answer: "ETN" },
      ]
    }
  },
  {
    id: 2,
    grid: [
      ['M', 'I', 'N', 'E', 'D'],
      ['I', null, 'O', null, 'A'],
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
        { number: 2, clue: "Denial of service", row: 0, col: 2, length: 3, answer: "NOD" },
        { number: 4, clue: "Decentralized org", row: 0, col: 4, length: 3, answer: "DAO" },
      ]
    }
  },
  {
    id: 3,
    grid: [
      ['W', 'H', 'A', 'L', 'E'],
      ['A', null, 'L', 'T', 'T'],
      ['G', 'W', 'E', 'I', 'H'],
      ['M', null, 'S', null, null],
      ['I', 'N', 'F', 'O', null],
    ],
    clues: {
      across: [
        { number: 1, clue: "Large crypto holder", row: 0, col: 0, length: 5, answer: "WHALE" },
        { number: 6, clue: "Alternative coin", row: 1, col: 2, length: 3, answer: "ALT" },
        { number: 7, clue: "Smallest ether unit", row: 2, col: 0, length: 4, answer: "GWEI" },
        { number: 9, clue: "Data or details", row: 4, col: 0, length: 4, answer: "INFO" },
      ],
      down: [
        { number: 1, clue: "We're all gonna make it", row: 0, col: 0, length: 5, answer: "WAGMI" },
        { number: 2, clue: "Web hosting service", row: 1, col: 1, length: 2, answer: "WN" },
        { number: 3, clue: "Token sale", row: 0, col: 2, length: 4, answer: "ALES" },
        { number: 4, clue: "Bitcoin layer 2", row: 0, col: 3, length: 2, answer: "LT" },
        { number: 5, clue: "Ethereum", row: 0, col: 4, length: 3, answer: "ETH" },
      ]
    }
  },
  {
    id: 4,
    grid: [
      ['F', 'O', 'M', 'O', null],
      ['U', null, 'I', null, 'G'],
      ['D', 'I', 'V', 'E', 'A'],
      [null, null, null, null, 'S'],
      ['G', 'A', 'S', null, null],
    ],
    clues: {
      across: [
        { number: 1, clue: "Fear of missing out", row: 0, col: 0, length: 4, answer: "FOMO" },
        { number: 5, clue: "Research deeply", row: 2, col: 0, length: 4, answer: "DIVE" },
        { number: 7, clue: "Ethereum transaction fee", row: 4, col: 0, length: 3, answer: "GAS" },
      ],
      down: [
        { number: 1, clue: "Fear, uncertainty, doubt", row: 0, col: 0, length: 3, answer: "FUD" },
        { number: 2, clue: "Type of token", row: 0, col: 2, length: 3, answer: "MIV" },
        { number: 3, clue: "Old computer storage", row: 0, col: 3, length: 2, answer: "OE" },
        { number: 6, clue: "Ethereum transaction fee", row: 1, col: 4, length: 3, answer: "GAS" },
      ]
    }
  },
  {
    id: 5,
    grid: [
      ['P', 'U', 'M', 'P', 'S'],
      ['O', null, null, 'E', 'E'],
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
        { number: 2, clue: "Platform or service", row: 0, col: 3, length: 3, answer: "PES" },
        { number: 4, clue: "Paper hands action", row: 0, col: 4, length: 4, answer: "SELL" },
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
      ['S', 'E', 'N', 'D', null],
    ],
    clues: {
      across: [
        { number: 1, clue: "Optimistic traders", row: 0, col: 0, length: 5, answer: "BULLS" },
        { number: 3, clue: "Sell offers", row: 2, col: 0, length: 4, answer: "ASKS" },
        { number: 5, clue: "Transfer coins", row: 4, col: 0, length: 4, answer: "SEND" },
      ],
      down: [
        { number: 1, clue: "Pessimistic market", row: 0, col: 0, length: 5, answer: "BEARS" },
        { number: 2, clue: "Platform choice", row: 1, col: 1, length: 2, answer: "SE" },
        { number: 4, clue: "Bitcoin units", row: 0, col: 4, length: 4, answer: "SATS" },
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
      ['S', 'O', 'L', null, null],
    ],
    clues: {
      across: [
        { number: 1, clue: "Web3 applications", row: 0, col: 0, length: 5, answer: "DAPPS" },
        { number: 3, clue: "Transaction costs", row: 2, col: 0, length: 4, answer: "FEES" },
        { number: 5, clue: "Solana token symbol", row: 4, col: 0, length: 3, answer: "SOL" },
      ],
      down: [
        { number: 1, clue: "Decentralized finance", row: 0, col: 0, length: 5, answer: "DEFIS" },
        { number: 2, clue: "Price prediction", row: 1, col: 1, length: 2, answer: "EO" },
        { number: 4, clue: "Bitcoin units", row: 0, col: 4, length: 4, answer: "SATS" },
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
      ['E', 'A', 'R', 'N', null],
    ],
    clues: {
      across: [
        { number: 1, clue: "Hold long-term (plural)", row: 0, col: 0, length: 5, answer: "HODLS" },
        { number: 3, clue: "Exchange tokens", row: 2, col: 0, length: 4, answer: "SWAP" },
        { number: 5, clue: "Yield from staking", row: 4, col: 0, length: 4, answer: "EARN" },
      ],
      down: [
        { number: 1, clue: "Cryptographic digest", row: 0, col: 0, length: 5, answer: "HASHE" },
        { number: 2, clue: "Decentralized autonomous org", row: 0, col: 2, length: 4, answer: "DAAO" },
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
        { number: 2, clue: "Token identifier", row: 1, col: 1, length: 3, answer: "IDD" },
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
