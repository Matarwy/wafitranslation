import WordList from './compnents/WordList';
import allwords from './constants/words';
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
  const [selectedVoice, setSelectedVoice] = useState(null);

  useEffect(() => {  
      setWordsData(allwords);
      // Fetch available voices when the component mounts
      const voices = speechSynthesis.getVoices();
      // Set the initial selected voice (you can choose a default or let the user decide)
      setSelectedVoice(voices[0]);
  }, []);
  

  const handleVoiceChange = (event) => {
    const selectedVoiceName = event.target.value;
    const voices = speechSynthesis.getVoices();
    const newSelectedVoice = voices.find((voice) => voice.name === selectedVoiceName);
    setSelectedVoice(newSelectedVoice);
  };

  const wordListProps = {
    selectedVoice,
    onVoiceChange: handleVoiceChange,
  };


  if (!wordsData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App" style={styles.app}>
      <h1 style={styles.header}>Wafi Translation</h1>
      <header style={styles.header}>
        <label htmlFor="voices">Select a voice:</label>
        <select id="voices" onChange={handleVoiceChange} value={selectedVoice ? selectedVoice.name : ''}>
          {speechSynthesis.getVoices().map((voice) => (
            <option key={voice.name} value={voice.name}>
              {voice.name}
            </option>
          ))}
        </select>
      </header>
      {wordsData.map((category, index) => (
        <WordList key={index} category={category.name} words={category.words} selectedVoice={selectedVoice} />
      ))}
    </div>
  );
}

export default App;

