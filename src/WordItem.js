import React from 'react';

const styles = {
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
    const utterance_en = new SpeechSynthesisUtterance(word.english);
    // const utterance_ar = new SpeechSynthesisUtterance(word.arabic);

    // utterance_ar.lang = 'ar-SA'; // Replace 'ar-SA' with the appropriate Arabic language code
    utterance_en.lang = 'en-US'; // Replace 'en-US' with the appropriate English language code

    // Implement text-to-speech functionality
    window.speechSynthesis.speak(utterance_en);
    // window.speechSynthesis.speak(utterance_ar);
  };

  return (
    <div onClick={playPronunciation} style={styles.wordItem}>
        <span>{word.english}</span>
        <span style={{ marginLeft: '10px' }}>({word.arabic})</span>
    </div>
  );
}

export default WordItem;
