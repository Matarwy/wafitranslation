import WordList from './compnents/WordList';
import allwords from './constants/words';
import React, { useState, useEffect } from 'react';
import AWS from 'aws-sdk';

const styles = {
  app: {
    fontFamily: 'Comic Sans MS, cursive',
    background: '#000000',
    backgroundImage: 'linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff 100%), linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff 100%)',
    minHeight: '100vh',
  },
  header: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#0B60B0',
  },
  hero: {
    backgroundColor: '#0B60B0', // Replace with your desired background color
    color: '#F0EDCF',
    padding: '80px 20px', // Adjust padding as needed
    textAlign: 'center',
    position: 'relative',
    width: '100%',
    margin: '0 auto', // Center the hero section
  },
  heroTitle: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  selectVoice: {
    fontSize: '18px',
    marginTop: '20px',
  },
  voiceSelect: {
    fontSize: '16px',
    padding: '10px',
    borderRadius: '5px',
  },
  link: {
    color: '#0B60B0', // Change the color to a contrasting color
    textDecoration: 'none',
    fontWeight: 'bold',
    marginLeft: '5px', // Adjust the spacing as needed
  },

  footer: {
    marginTop: '20px',
    textAlign: 'center',
    padding: '10px',
    backgroundColor: '#000000',
    color: '#F0EDCF',
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
          const defaultVoice = usEnglishVoices.find((voice) => voice.Name === 'Matthew');
          setSelectedVoice(defaultVoice || usEnglishVoices[0]);
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
      {/* Hero Section */}
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>English Basic Words by Wafi ALthagafi</h1>
        <p style={styles.selectVoice}>Select a voice:</p>
        <select
          id="voices"
          style={styles.voiceSelect}
          onChange={handleVoiceChange}
          value={selectedVoice ? selectedVoice.Name : ''}
        >
          {voices.map((voice) => (
            <option key={voice.Id} value={voice.Name}>
              {voice.Name}
            </option>
          ))}
        </select>
      </div>

      {/* WordLists and other components */}
      {wordsData.map((category, index) => (
        <WordList key={index} category={category.name} words={category.words} selectedVoice={selectedVoice} />
      ))}

      {/* Footer */}
      <footer style={styles.footer}>
        <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
        <p>
          Made with love by{' '}
          <a
            href="https://github.com/Matarwy"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            Alhassan Ramadan
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;

