import WordList from './compnents/WordList';
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
    // Check if data is in session storage
    const storedData = sessionStorage.getItem('wordsData');

    if (storedData) {
      // If data is in session storage, use it
      setWordsData(JSON.parse(storedData));
    } else {
      // If data is not in session storage, fetch and store it
      fetch("./constants/words.json", {
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setWordsData(data);
          // Store the data in session storage
          sessionStorage.setItem('wordsData', JSON.stringify(data));
        })
        .catch((error) => console.error('Error loading JSON:', error));
    }
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

