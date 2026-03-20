// Complete puzzle bank - each puzzle is a valid 5x5 crossword with interlocking words
// All answers are crypto/web3/blockchain themed, 3-5 letters each

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
        { number: 1, clue: "DeFi yield farming action", row: 0, col: 0, length: 5, answer: "STAKE" },
        { number: 5, clue: "Digital asset on a blockchain", row: 2, col: 0, length: 5, answer: "TOKEN" },
      ],
      down: [
        { number: 1, clue: "Bitcoin's smallest unit, plural", row: 0, col: 0, length: 3, answer: "SAT" },
        { number: 2, clue: "Ethereum, informally", row: 0, col: 4, length: 2, answer: "ET" },
      ]
    }
  },
  {
    id: 2,
    grid: [
      ['M', 'I', 'N', 'T', null],
      ['I', null, null, 'X', null],
      ['N', 'O', 'D', 'E', null],
      ['E', null, null, null, null],
      [null, null, null, null, null],
    ],
    clues: {
      across: [
        { number: 1, clue: "Create a new NFT", row: 0, col: 0, length: 4, answer: "MINT" },
        { number: 3, clue: "Network validator computer", row: 2, col: 0, length: 4, answer: "NODE" },
      ],
      down: [
        { number: 1, clue: "Crypto extraction process", row: 0, col: 0, length: 4, answer: "MINE" },
        { number: 2, clue: "Crypto transaction, briefly", row: 0, col: 3, length: 2, answer: "TX" },
      ]
    }
  },
  {
    id: 3,
    grid: [
      ['W', 'H', 'A', 'L', 'E'],
      ['A', null, null, null, null],
      ['G', 'W', 'E', 'I', null],
      ['M', null, null, null, null],
      ['I', null, null, null, null],
    ],
    clues: {
      across: [
        { number: 1, clue: "Large crypto holder", row: 0, col: 0, length: 5, answer: "WHALE" },
        { number: 3, clue: "Smallest unit of ether", row: 2, col: 0, length: 4, answer: "GWEI" },
      ],
      down: [
        { number: 1, clue: "We're all gonna make it", row: 0, col: 0, length: 5, answer: "WAGMI" },
      ]
    }
  },
  {
    id: 4,
    grid: [
      ['S', 'C', 'A', 'M', null],
      ['E', null, null, null, null],
      ['L', 'O', 'N', 'G', null],
      ['L', null, null, null, null],
      [null, null, null, null, null],
    ],
    clues: {
      across: [
        { number: 1, clue: "Rug pull, essentially", row: 0, col: 0, length: 4, answer: "SCAM" },
        { number: 3, clue: "Bullish position", row: 2, col: 0, length: 4, answer: "LONG" },
      ],
      down: [
        { number: 1, clue: "What paper hands do", row: 0, col: 0, length: 4, answer: "SELL" },
      ]
    }
  },
  {
    id: 5,
    grid: [
      ['F', 'O', 'M', 'O', null],
      [null, null, null, 'P', null],
      ['G', 'A', 'S', null, null],
      ['M', null, null, null, null],
      [null, null, null, null, null],
    ],
    clues: {
      across: [
        { number: 1, clue: "Fear of missing out", row: 0, col: 0, length: 4, answer: "FOMO" },
        { number: 3, clue: "Ethereum transaction fee", row: 2, col: 0, length: 3, answer: "GAS" },
      ],
      down: [
        { number: 2, clue: "Trading chart candle type", row: 0, col: 3, length: 2, answer: "OP" },
        { number: 3, clue: "Not gonna make it", row: 2, col: 0, length: 2, answer: "GM" },
      ]
    }
  },
  {
    id: 6,
    grid: [
      ['P', 'U', 'M', 'P', null],
      ['O', null, null, null, null],
      ['O', 'D', 'D', 'S', null],
      ['L', null, null, null, null],
      [null, null, null, null, null],
    ],
    clues: {
      across: [
        { number: 1, clue: "Price surge upward", row: 0, col: 0, length: 4, answer: "PUMP" },
        { number: 3, clue: "Betting chances", row: 2, col: 0, length: 4, answer: "ODDS" },
      ],
      down: [
        { number: 1, clue: "Liquidity reserve", row: 0, col: 0, length: 4, answer: "POOL" },
      ]
    }
  },
  {
    id: 7,
    grid: [
      ['F', 'I', 'A', 'T', null],
      ['O', null, null, null, null],
      ['R', 'U', 'G', null, null],
      ['K', null, null, null, null],
      [null, null, null, null, null],
    ],
    clues: {
      across: [
        { number: 1, clue: "Government-issued currency", row: 0, col: 0, length: 4, answer: "FIAT" },
        { number: 3, clue: "Exit scam, informally", row: 2, col: 0, length: 3, answer: "RUG" },
      ],
      down: [
        { number: 1, clue: "Blockchain split", row: 0, col: 0, length: 4, answer: "FORK" },
      ]
    }
  },
  {
    id: 8,
    grid: [
      ['D', 'A', 'P', 'P', null],
      ['E', null, null, null, null],
      ['F', 'E', 'E', null, null],
      ['I', null, null, null, null],
      [null, null, null, null, null],
    ],
    clues: {
      across: [
        { number: 1, clue: "Decentralized app", row: 0, col: 0, length: 4, answer: "DAPP" },
        { number: 3, clue: "Transaction cost", row: 2, col: 0, length: 3, answer: "FEE" },
      ],
      down: [
        { number: 1, clue: "Decentralized finance", row: 0, col: 0, length: 4, answer: "DEFI" },
      ]
    }
  },
  {
    id: 9,
    grid: [
      ['K', 'E', 'Y', 'S', null],
      [null, null, null, 'E', null],
      ['A', 'P', 'E', 'D', null],
      [null, null, null, null, null],
      [null, null, null, null, null],
    ],
    clues: {
      across: [
        { number: 1, clue: "Private wallet access", row: 0, col: 0, length: 4, answer: "KEYS" },
        { number: 3, clue: "Bought without research, past tense", row: 2, col: 0, length: 4, answer: "APED" },
      ],
      down: [
        { number: 2, clue: "Crypto starting point", row: 0, col: 3, length: 3, answer: "SED" },
      ]
    }
  },
  {
    id: 10,
    grid: [
      ['H', 'O', 'D', 'L', null],
      ['A', null, null, null, null],
      ['S', 'W', 'A', 'P', null],
      ['H', null, null, null, null],
      [null, null, null, null, null],
    ],
    clues: {
      across: [
        { number: 1, clue: "Hold crypto long-term", row: 0, col: 0, length: 4, answer: "HODL" },
        { number: 3, clue: "Trade one token for another", row: 2, col: 0, length: 4, answer: "SWAP" },
      ],
      down: [
        { number: 1, clue: "Cryptographic digest", row: 0, col: 0, length: 4, answer: "HASH" },
      ]
    }
  },
  {
    id: 11,
    grid: [
      ['B', 'U', 'L', 'L', null],
      ['I', null, null, null, null],
      ['D', 'U', 'M', 'P', null],
      [null, null, null, null, null],
      [null, null, null, null, null],
    ],
    clues: {
      across: [
        { number: 1, clue: "Optimistic market sentiment", row: 0, col: 0, length: 4, answer: "BULL" },
        { number: 3, clue: "Sell-off crash", row: 2, col: 0, length: 4, answer: "DUMP" },
      ],
      down: [
        { number: 1, clue: "Buy the ___", row: 0, col: 0, length: 3, answer: "BID" },
      ]
    }
  },
  {
    id: 12,
    grid: [
      ['B', 'E', 'A', 'R', null],
      ['U', null, null, null, null],
      ['R', 'A', 'R', 'E', null],
      ['N', null, null, null, null],
      [null, null, null, null, null],
    ],
    clues: {
      across: [
        { number: 1, clue: "Pessimistic market view", row: 0, col: 0, length: 4, answer: "BEAR" },
        { number: 3, clue: "Highly valuable NFT trait", row: 2, col: 0, length: 4, answer: "RARE" },
      ],
      down: [
        { number: 1, clue: "Token destruction", row: 0, col: 0, length: 4, answer: "BURN" },
      ]
    }
  },
  {
    id: 13,
    grid: [
      ['C', 'O', 'I', 'N', null],
      ['O', null, null, null, null],
      ['L', 'O', 'S', 'S', null],
      ['D', null, null, null, null],
      [null, null, null, null, null],
    ],
    clues: {
      across: [
        { number: 1, clue: "Digital currency", row: 0, col: 0, length: 4, answer: "COIN" },
        { number: 3, clue: "Trading deficit", row: 2, col: 0, length: 4, answer: "LOSS" },
      ],
      down: [
        { number: 1, clue: "Not hot storage", row: 0, col: 0, length: 4, answer: "COLD" },
      ]
    }
  },
  {
    id: 14,
    grid: [
      ['P', 'E', 'E', 'R', null],
      [null, null, null, 'A', null],
      ['L', 'E', 'N', 'D', null],
      [null, null, null, null, null],
      [null, null, null, null, null],
    ],
    clues: {
      across: [
        { number: 1, clue: "P2P network participant", row: 0, col: 0, length: 4, answer: "PEER" },
        { number: 3, clue: "DeFi loan action", row: 2, col: 0, length: 4, answer: "LEND" },
      ],
      down: [
        { number: 2, clue: "Stablecoin acronym", row: 0, col: 3, length: 3, answer: "RAD" },
      ]
    }
  },
  {
    id: 15,
    grid: [
      ['V', 'O', 'T', 'E', null],
      [null, null, null, 'T', null],
      ['D', 'A', 'O', 'H', null],
      [null, null, null, null, null],
      [null, null, null, null, null],
    ],
    clues: {
      across: [
        { number: 1, clue: "DAO governance action", row: 0, col: 0, length: 4, answer: "VOTE" },
        { number: 3, clue: "Decentralized autonomous org", row: 2, col: 0, length: 3, answer: "DAO" },
      ],
      down: [
        { number: 2, clue: "Ethereum, for short", row: 0, col: 3, length: 3, answer: "ETH" },
      ]
    }
  },
  {
    id: 16,
    grid: [
      ['W', 'E', 'B', '3', null],
      [null, null, null, null, null],
      ['A', 'L', 'P', 'H', 'A'],
      [null, null, null, null, null],
      [null, null, null, null, null],
    ],
    clues: {
      across: [
        { number: 1, clue: "Decentralized internet", row: 0, col: 0, length: 4, answer: "WEB3" },
        { number: 3, clue: "Testing phase", row: 2, col: 0, length: 5, answer: "ALPHA" },
      ],
      down: []
    }
  },
  {
    id: 17,
    grid: [
      ['F', 'U', 'D', null, null],
      ['L', null, null, null, null],
      ['O', 'W', 'E', null, null],
      ['W', null, null, null, null],
      [null, null, null, null, null],
    ],
    clues: {
      across: [
        { number: 1, clue: "Fear, uncertainty, doubt", row: 0, col: 0, length: 3, answer: "FUD" },
        { number: 3, clue: "Crypto slang: we", row: 2, col: 0, length: 3, answer: "OWE" },
      ],
      down: [
        { number: 1, clue: "Trading volume pace", row: 0, col: 0, length: 4, answer: "FLOW" },
      ]
    }
  },
  {
    id: 18,
    grid: [
      ['G', 'E', 'M', null, null],
      ['A', null, null, null, null],
      ['I', 'N', 'C', null, null],
      ['N', null, null, null, null],
      [null, null, null, null, null],
    ],
    clues: {
      across: [
        { number: 1, clue: "Hidden valuable token", row: 0, col: 0, length: 3, answer: "GEM" },
        { number: 3, clue: "Increase, briefly", row: 2, col: 0, length: 3, answer: "INC" },
      ],
      down: [
        { number: 1, clue: "Profit from trade", row: 0, col: 0, length: 4, answer: "GAIN" },
      ]
    }
  },
  {
    id: 19,
    grid: [
      ['R', 'I', 'S', 'K', null],
      ['A', null, null, null, null],
      ['R', 'U', 'N', null, null],
      ['E', null, null, null, null],
      [null, null, null, null, null],
    ],
    clues: {
      across: [
        { number: 1, clue: "Investment danger", row: 0, col: 0, length: 4, answer: "RISK" },
        { number: 3, clue: "Bull market surge", row: 2, col: 0, length: 3, answer: "RUN" },
      ],
      down: [
        { number: 1, clue: "Uncommon NFT", row: 0, col: 0, length: 4, answer: "RARE" },
      ]
    }
  },
  {
    id: 20,
    grid: [
      ['S', 'E', 'E', 'D', null],
      ['A', null, null, null, null],
      ['F', 'E', 'E', 'D', null],
      ['E', null, null, null, null],
      [null, null, null, null, null],
    ],
    clues: {
      across: [
        { number: 1, clue: "Wallet recovery phrase word", row: 0, col: 0, length: 4, answer: "SEED" },
        { number: 3, clue: "Data stream", row: 2, col: 0, length: 4, answer: "FEED" },
      ],
      down: [
        { number: 1, clue: "Secure, not risky", row: 0, col: 0, length: 4, answer: "SAFE" },
      ]
    }
  },
  {
    id: 21,
    grid: [
      ['T', 'E', 'S', 'T', null],
      ['R', null, null, null, null],
      ['A', 'P', 'E', 'X', null],
      ['P', null, null, null, null],
      [null, null, null, null, null],
    ],
    clues: {
      across: [
        { number: 1, clue: "Beta environment", row: 0, col: 0, length: 4, answer: "TEST" },
        { number: 3, clue: "Peak or top", row: 2, col: 0, length: 4, answer: "APEX" },
      ],
      down: [
        { number: 1, clue: "Liquidity snare", row: 0, col: 0, length: 4, answer: "TRAP" },
      ]
    }
  },
  {
    id: 22,
    grid: [
      ['S', 'H', 'I', 'B', null],
      ['E', null, null, null, null],
      ['L', 'O', 'W', null, null],
      ['F', null, null, null, null],
      [null, null, null, null, null],
    ],
    clues: {
      across: [
        { number: 1, clue: "Dog-themed meme coin", row: 0, col: 0, length: 4, answer: "SHIB" },
        { number: 3, clue: "Bearish market state", row: 2, col: 0, length: 3, answer: "LOW" },
      ],
      down: [
        { number: 1, clue: "Custody option", row: 0, col: 0, length: 4, answer: "SELF" },
      ]
    }
  },
  {
    id: 23,
    grid: [
      ['T', 'I', 'E', 'R', null],
      [null, null, null, 'O', null],
      ['V', 'I', 'E', 'W', null],
      [null, null, null, null, null],
      [null, null, null, null, null],
    ],
    clues: {
      across: [
        { number: 1, clue: "Level or rank", row: 0, col: 0, length: 4, answer: "TIER" },
        { number: 3, clue: "Chart display", row: 2, col: 0, length: 4, answer: "VIEW" },
      ],
      down: [
        { number: 2, clue: "Price increase percentage", row: 0, col: 3, length: 3, answer: "ROW" },
      ]
    }
  },
  {
    id: 24,
    grid: [
      ['B', 'I', 'D', 'S', null],
      ['O', null, null, null, null],
      ['T', 'R', 'U', 'E', null],
      [null, null, null, null, null],
      [null, null, null, null, null],
    ],
    clues: {
      across: [
        { number: 1, clue: "Buy offers", row: 0, col: 0, length: 4, answer: "BIDS" },
        { number: 3, clue: "Genuine or real", row: 2, col: 0, length: 4, answer: "TRUE" },
      ],
      down: [
        { number: 1, clue: "Trading algorithm", row: 0, col: 0, length: 3, answer: "BOT" },
      ]
    }
  },
  {
    id: 25,
    grid: [
      ['C', 'A', 'L', 'L', null],
      ['H', null, null, null, null],
      ['A', 'S', 'K', 'S', null],
      ['D', null, null, null, null],
      [null, null, null, null, null],
    ],
    clues: {
      across: [
        { number: 1, clue: "Options contract type", row: 0, col: 0, length: 4, answer: "CALL" },
        { number: 3, clue: "Sell offers", row: 2, col: 0, length: 4, answer: "ASKS" },
      ],
      down: [
        { number: 1, clue: "Network messaging app", row: 0, col: 0, length: 4, answer: "CHAD" },
      ]
    }
  },
  {
    id: 26,
    grid: [
      ['D', 'A', 'T', 'A', null],
      ['E', null, null, null, null],
      ['X', 'R', 'P', null, null],
      [null, null, null, null, null],
      [null, null, null, null, null],
    ],
    clues: {
      across: [
        { number: 1, clue: "Blockchain information", row: 0, col: 0, length: 4, answer: "DATA" },
        { number: 3, clue: "Ripple's token", row: 2, col: 0, length: 3, answer: "XRP" },
      ],
      down: [
        { number: 1, clue: "Decentralized exchange", row: 0, col: 0, length: 3, answer: "DEX" },
      ]
    }
  },
  {
    id: 27,
    grid: [
      ['E', 'P', 'I', 'C', null],
      ['A', null, null, null, null],
      ['R', 'A', 'N', 'K', null],
      ['N', null, null, null, null],
      [null, null, null, null, null],
    ],
    clues: {
      across: [
        { number: 1, clue: "Legendary NFT tier", row: 0, col: 0, length: 4, answer: "EPIC" },
        { number: 3, clue: "Position or level", row: 2, col: 0, length: 4, answer: "RANK" },
      ],
      down: [
        { number: 1, clue: "Crypto rewards", row: 0, col: 0, length: 4, answer: "EARN" },
      ]
    }
  },
  {
    id: 28,
    grid: [
      ['F', 'A', 'S', 'T', null],
      ['I', null, null, null, null],
      ['N', 'E', 'W', null, null],
      ['D', null, null, null, null],
      [null, null, null, null, null],
    ],
    clues: {
      across: [
        { number: 1, clue: "Quick transaction speed", row: 0, col: 0, length: 4, answer: "FAST" },
        { number: 3, clue: "Fresh token launch", row: 2, col: 0, length: 3, answer: "NEW" },
      ],
      down: [
        { number: 1, clue: "Locate or discover", row: 0, col: 0, length: 4, answer: "FIND" },
      ]
    }
  },
  {
    id: 29,
    grid: [
      ['G', 'O', 'L', 'D', null],
      ['R', null, null, null, null],
      ['I', 'D', 'L', 'E', null],
      ['D', null, null, null, null],
      [null, null, null, null, null],
    ],
    clues: {
      across: [
        { number: 1, clue: "Precious metal analogy", row: 0, col: 0, length: 4, answer: "GOLD" },
        { number: 3, clue: "Inactive or dormant", row: 2, col: 0, length: 4, answer: "IDLE" },
      ],
      down: [
        { number: 1, clue: "Network layout", row: 0, col: 0, length: 4, answer: "GRID" },
      ]
    }
  },
  {
    id: 30,
    grid: [
      ['H', 'I', 'G', 'H', null],
      ['O', null, null, null, null],
      ['P', 'U', 'R', 'E', null],
      ['E', null, null, null, null],
      [null, null, null, null, null],
    ],
    clues: {
      across: [
        { number: 1, clue: "Peak price point", row: 0, col: 0, length: 4, answer: "HIGH" },
        { number: 3, clue: "Genuine or authentic", row: 2, col: 0, length: 4, answer: "PURE" },
      ],
      down: [
        { number: 1, clue: "Optimism or belief", row: 0, col: 0, length: 4, answer: "HOPE" },
      ]
    }
  },
  {
    id: 31,
    grid: [
      ['L', 'I', 'N', 'K', null],
      ['O', null, null, null, null],
      ['C', 'O', 'D', 'E', null],
      ['K', null, null, null, null],
      [null, null, null, null, null],
    ],
    clues: {
      across: [
        { number: 1, clue: "Chainlink token", row: 0, col: 0, length: 4, answer: "LINK" },
        { number: 3, clue: "Smart contract program", row: 2, col: 0, length: 4, answer: "CODE" },
      ],
      down: [
        { number: 1, clue: "Secure access control", row: 0, col: 0, length: 4, answer: "LOCK" },
      ]
    }
  },
  {
    id: 32,
    grid: [
      ['M', 'O', 'O', 'N', null],
      ['A', null, null, null, null],
      ['K', 'E', 'E', 'P', null],
      ['E', null, null, null, null],
      [null, null, null, null, null],
    ],
    clues: {
      across: [
        { number: 1, clue: "Price to the ___!", row: 0, col: 0, length: 4, answer: "MOON" },
        { number: 3, clue: "HODL or retain", row: 2, col: 0, length: 4, answer: "KEEP" },
      ],
      down: [
        { number: 1, clue: "Create or build", row: 0, col: 0, length: 4, answer: "MAKE" },
      ]
    }
  },
];
