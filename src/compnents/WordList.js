import React, { useState } from 'react';
import AWS from 'aws-sdk';

const styles = {
  wordList: {
    marginBottom: '20px',
    textAlign: 'center',
  },
  categoryTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
    cursor: 'pointer',
    textTransform: 'capitalize', // Capitalize the first character
    position: 'relative',
    backgroundColor: '#0098ff', // Background color when closed
    padding: '15px',
    borderRadius: '8px',
    color: '#fff',
  },
  downArrow: {
    position: 'absolute',
    top: '50%',
    right: '10px',
    transform: 'translateY(-50%)',
  },
  openCategory: {
    backgroundColor: '#2980b9', // Background color when open
  },
  wordItem: {
    cursor: 'pointer',
    padding: '10px',
    margin: '5px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    display: 'inline-block',
    background: '#f8f8f8',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'background 0.3s',
  },
};

function WordItem({ word, selectedVoice, capitalize  }) {
  const playPronunciation = () => {
    if (!selectedVoice) {
      console.error('No voice selected.');
      return;
    }

    const polly = new AWS.Polly();
    const params = {
      OutputFormat: 'mp3',
      Text: capitalize ? word.english.toUpperCase() : capitalizeI(word.english.toLowerCase()),
      VoiceId: selectedVoice.Id,
    };

    polly.synthesizeSpeech(params, (err, data) => {
      if (err) console.error(err);
      else {
        const audio = new Audio(`data:audio/mp3;base64,${data.AudioStream.toString('base64')}`);
        audio.play();
      }
    });
  };

  // Function to capitalize standalone "I" in a sentence
  const capitalizeI = (text) => {
    const words = text.split(' ');
    const capitalizedWords = words.map((word) => (word.toLowerCase() === 'i' ? 'I' : word));
    return capitalizedWords.join(' ');
  };

  return (
    <div onClick={playPronunciation} style={styles.wordItem}>
      <span>{capitalize ? word.english.toUpperCase() : capitalizeI(word.english.toLowerCase())}</span>
      <span style={{ marginLeft: '10px' }}>({word.arabic})</span>
    </div>
  );
}

function WordList({ category, words, selectedVoice }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    if (!isOpen) {
      // Play category pronunciation when opening the dropdown
      playcategoryPronunciation();
    }
    setIsOpen(!isOpen);
  };

  const playcategoryPronunciation = () => {
    if (!selectedVoice) {
      console.error('No voice selected.');
      return;
    }

    const polly = new AWS.Polly();
    const params = {
      OutputFormat: 'mp3',
      Text: category.english,
      VoiceId: selectedVoice.Id,
    };

    polly.synthesizeSpeech(params, (err, data) => {
      if (err) console.error(err);
      else {
        const audio = new Audio(`data:audio/mp3;base64,${data.AudioStream.toString('base64')}`);
        audio.play();
      }
    });
  };

  return (
    <div style={{ ...styles.wordList, ...isOpen && styles.openCategory }}>
      <h2
        style={styles.categoryTitle}
        onClick={toggleDropdown}
      >
        <span>{category.english}</span>
        <span style={{ marginLeft: '10px' }}>({category.arabic})</span>
        <span style={styles.downArrow}>&#9660;</span>
      </h2>
      {isOpen && (
        <div>
          {words ? (
            words.map((word, index) => (
              <WordItem key={index} word={word} selectedVoice={selectedVoice} 
              capitalize={
                // Capitalize words in the "Week Days," "Months," and "I" categories
                category.english === 'Days' ||
                category.english === 'Months' ||
                word.english.toLowerCase() === 'i'
              } />
            ))
          ) : (
            <p>No words available</p>
          )}
        </div>
      )}
    </div>
  );
}

export default WordList;
