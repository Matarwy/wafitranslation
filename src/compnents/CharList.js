import React from 'react';
import AWS from 'aws-sdk';

const styles = {
  charList: {
    marginBottom: '20px',
    textAlign: 'center',
  },
  categoryTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
    cursor: 'pointer',
    textTransform: 'capitalize',
    position: 'relative',
    backgroundColor: '#0098ff',
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
    backgroundColor: '#2980b9',
  },
  charItemContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    
  },
  charItem: {
    cursor: 'pointer',
    padding: '10px',
    margin: '5px',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'row', // Change to 'row'
    alignItems: 'center',
    background: '#f8f8f8',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'background 0.3s',
    width: '50px', // Adjust the width as needed
  },
  upper: {
    fontSize: '24px',
    marginRight: '25%',
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #fa020c 0%, #ff3900 99%, #fa3902 100%)', // Gradient from pink to light pink
    WebkitBackgroundClip: 'text', // Clip text to the background color
    color: 'transparent', // Make the text transparent
  },
  lower: {
    fontSize: '24px',
    background: 'linear-gradient(45deg, #00ffd0 0%, #002fff 100%)', // Gradient from teal to lavender
    WebkitBackgroundClip: 'text', // Clip text to the background color
    color: 'transparent', // Make the text transparent
  },
};

function CharList({ category, words, selectedVoice }) {

  const playCharAudio = (char) => {
    if (!selectedVoice) {
      console.error('No voice selected.');
      return;
    }

    const polly = new AWS.Polly();
    const params = {
      OutputFormat: 'mp3',
      Text: char.uppercase,
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
    <div style={{ ...styles.charList && styles.openCategory }}>
      <h2 style={styles.categoryTitle}>
        <span>{category.english}</span>
        <span style={{ marginLeft: '10px' }}>({category.arabic})</span>
      </h2>
      {(
        <div style={styles.charItemContainer}>
          {words ? (
            words.map((char, index) => (
              <div key={index} style={styles.charItem} onClick={() => playCharAudio(char)}>
                <span style={styles.upper}>{char.uppercase}</span>
                <span style={styles.lower}>{char.lowercase}</span>
              </div>
            ))
          ) : (
            <p>No characters available</p>
          )}
        </div>
      )}
    </div>
  );
}

export default CharList;
