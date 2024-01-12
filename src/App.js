import WordList from './WordList';
import React, { useState, useEffect } from 'react';

const styles = {
  app: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f0f0f0',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  header: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333',
  },
};

function App() {
  const [wordsData, setWordsData] = useState(null);

  useEffect(() => {
    // Load JSON data
    fetch('/words.json') // assuming the file is in the public folder
      .then((response) => response.json())
      .then((data) => setWordsData(data))
      .catch((error) => console.error('Error loading JSON:', error));
  }, []);

  if (!wordsData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App" style={styles.app}>
      <header  style={styles.header}>Wafi Translation</header >
      {wordsData.categories.map((category, index) => (
        <WordList key={index} category={category.name} words={category.words} />
      ))}
    </div>
  );
}

export default App;

