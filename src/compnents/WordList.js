import React from 'react';
import AWS from 'aws-sdk';

const styles = {
    wordList: {
        marginBottom: '20px',
        textAlign: 'center',  // Center-align the text within the WordList component
    },
        categoryTitle: {
        fontSize: '20px',
        fontWeight: 'bold',
        marginBottom: '10px',
        cursor: 'pointer',
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

function WordItem({ word, selectedVoice }) {
  const playPronunciation = () => {
    if (!selectedVoice) {
      console.error('No voice selected.');
      return;
    }

    const polly = new AWS.Polly();
    const params = {
      OutputFormat: 'mp3',
      Text: word.english,
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
    <div onClick={playPronunciation} style={styles.wordItem}>
      <span>{word.english}</span>
      <span style={{ marginLeft: '10px' }}>({word.arabic})</span>
    </div>
  );
}

function WordList({ category, words, selectedVoice }) {
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
    <div style={styles.wordList}>
      <h2 style={styles.categoryTitle} onClick={playcategoryPronunciation}>
        <span>{category.english}</span>
        <span style={{ marginLeft: '10px' }}>({category.arabic})</span>
      </h2>
      <div>
        {words ? (
          words.map((word, index) => (
            <WordItem key={index} word={word} selectedVoice={selectedVoice} />
          ))
        ) : (
          <p>No words available</p>
        )}
      </div>
    </div>
  );
}

export default WordList;
