import { useState, useEffect } from 'react';
import Game from './components/Game';
import { cleanupOldStates } from './lib/storage';
import styles from './App.module.css';

function App() {
  useEffect(() => {
    // Clean up old puzzle states on app load
    cleanupOldStates();
  }, []);

  return (
    <div className={styles.app}>
      <Game />
    </div>
  );
}

export default App;
