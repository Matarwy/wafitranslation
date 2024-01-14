import React from 'react';

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

function WordItem({ word }) {
  const playPronunciation = () => {
    const utterance = new SpeechSynthesisUtterance(word.english);
    var synth = speechSynthesis;

    utterance.lang = 'en-US'; 
    utterance.voice = synth.getVoices()[0];
    utterance.rate = 0.9
    utterance.volume = 2

    window.speechSynthesis.speak(utterance);
  };

  return (
    <div onClick={playPronunciation} style={styles.wordItem}>

        <span>{word.english}</span>
        <span style={{ marginLeft: '10px' }}>({word.arabic})</span>
      
    </div>
  );
}

function WordList({ category, words }) {
  const playCategoryPronunciation = () => {
    const utterance = new SpeechSynthesisUtterance(category.english);
    var synth = speechSynthesis;

    utterance.lang = 'en-US'; 
    utterance.voice = synth.getVoices()[0];
    utterance.rate = 0.9
    utterance.volume = 2

    window.speechSynthesis.speak(utterance);
  };

  return (
    <div style={styles.wordList}>
      <h2 style={styles.categoryTitle} onClick={playCategoryPronunciation}>
        <span>{category.english}</span>
        <span style={{ marginLeft: '10px' }}>({category.arabic})</span>
      </h2>
      <div>
        {words.map((word, index) => (
          <WordItem key={index} word={word} />
        ))}
      </div>
    </div>
  );
}

export default WordList;
