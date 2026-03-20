import styles from './Keyboard.module.css';

const KEYBOARD_ROWS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['NEXT', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BACK'],
];

function Keyboard({ onLetterClick, onBackspace, onNextWord }) {
  const handleKeyClick = (key) => {
    if (key === 'BACK') {
      onBackspace();
    } else if (key === 'NEXT') {
      onNextWord();
    } else {
      onLetterClick(key);
    }
  };

  return (
    <div className={styles.keyboard}>
      {KEYBOARD_ROWS.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.row}>
          {row.map(key => {
            const isSpecial = key === 'BACK' || key === 'NEXT';
            return (
              <button
                key={key}
                className={`${styles.key} ${isSpecial ? styles.specialKey : ''}`}
                onClick={() => handleKeyClick(key)}
              >
                {key === 'BACK' ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />
                    <line x1="18" y1="9" x2="12" y2="15" />
                    <line x1="12" y1="9" x2="18" y2="15" />
                  </svg>
                ) : key === 'NEXT' ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                ) : (
                  key
                )}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
