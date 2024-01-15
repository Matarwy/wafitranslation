import WordList from './compnents/WordList';
import allwords from './constants/words';
import React, { useState, useEffect } from 'react';
import AWS from 'aws-sdk';

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
  const [voices, setVoices] = useState([]);

  useEffect(() => {  
      // Set up AWS Polly
      AWS.config.update({
        accessKeyId: 'AKIAWNIY3M454YWQ5TMK',
        secretAccessKey: '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',
        region: 'me-south-1',
      });

      // Optionally, list available Polly voices and choose one
      const polly = new AWS.Polly();
      polly.describeVoices({}, (err, data) => {
        if (err) console.error(err);
        else if (data && data.Voices && data.Voices.length > 0) {
          const usEnglishVoices = data.Voices.filter((voice) => voice.LanguageCode === 'en-US');
          setSelectedVoice(usEnglishVoices[0]);
          setVoices(usEnglishVoices);
        }
      });

      // Fetch your wordsData
      setWordsData(allwords);
  }, []);
  

  // Function to handle voice change
  const handleVoiceChange = (event) => {
    const selectedVoiceName = event.target.value;
    const newSelectedVoice = selectedVoiceName
      ? voices.find((voice) => voice.Name === selectedVoiceName)
      : null;
    setSelectedVoice(newSelectedVoice);
  };


  if (!wordsData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App" style={styles.app}>
      {/* Your other components here */}
      <label htmlFor="voices">Select a voice:</label>
      <select id="voices" onChange={handleVoiceChange} value={selectedVoice ? selectedVoice.Name : ''}>
        {voices.map((voice) => (
          <option key={voice.Id} value={voice.Name}>
            {voice.Name}
          </option>
        ))}
      </select>
      {wordsData.map((category, index) => (
        <WordList key={index} category={category.name} words={category.words} selectedVoice={selectedVoice} />
      ))}
    </div>
  );
}

export default App;

