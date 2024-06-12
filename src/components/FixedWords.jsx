import { MOCK_DATA } from "../data/MockData";
import { useState, useEffect } from "react";

export default function FixedWords() {
  const [fixedGameWords, setFixedGameWords] = useState([]);
  const [inputWords, setInputWords] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [initialized, setInitialized] = useState(false);

  // Create function to randomise and generate array of words for the game
  const getRandomWords = (array, count) => {
    const shuffledArray = array.slice().sort(() => Math.random() - 0.5);
    return shuffledArray.slice(0, Math.min(count, shuffledArray.length));
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInputWords([
      ...inputWords.slice(0, currentIndex),
      value,
      ...inputWords.slice(currentIndex + 1),
    ]);
  };

  useEffect(() => {
    // Call the function to set the initial words
    const initialWords = getRandomWords(MOCK_DATA, 5);
    setFixedGameWords(initialWords);
    setInputWords(Array(initialWords.length).fill(""));
    setInitialized(true);
  }, []);

  const renderFixedWords = () => {
    return fixedGameWords.map((word, index) => (
      <div key={index} className="fixed-game-word">
        {word.split("").map((char, charIndex) => {
          return <span key={charIndex}>{char}</span>;
        })}
      </div>
    ));
  };

  return (
    <>
      <h1>FixedWords</h1>
      <div data-testid="fixedwords" className="fixedwords-display">
        {initialized && renderFixedWords()}
      </div>
      {initialized && (
        <textarea value={inputWords[currentIndex]} onChange={handleChange} />
      )}
    </>
  );
}
