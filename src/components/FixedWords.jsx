import { MOCK_DATA } from "../data/MockData";
import { useState, useEffect } from "react";

export default function FixedWords() {
  const [fixedGameWords, setFixedGameWords] = useState([]);
  // inputWords state gets it's "proper" initial state from the useEffect function below
  const [inputWords, setInputWords] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Create function to randomise and generate array of words for the game
  const getRandomWords = (array, count) => {
    const shuffledArray = array.slice().sort(() => Math.random() - 0.5);
    return shuffledArray.slice(0, Math.min(count, shuffledArray.length));
  };

  const handleChange = (e) => {
    const value = e.target.value;
  };

  useEffect(() => {
    // Call the function to set the initial words
    setFixedGameWords(getRandomWords(MOCK_DATA, 5));
    // Reset the state of InputWords with the newly randomised words
    setInputWords(Array(fixedGameWords.length).fill(""));
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
        {renderFixedWords()}
      </div>
      <textarea value={inputWords[currentIndex]} onChange={handleChange} />
    </>
  );
}
