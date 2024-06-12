import { MOCK_DATA } from "../data/MockData";
import { useState, useEffect } from "react";

export default function FixedWords() {
  const [fixedGameWords, setFixedGameWords] = useState([]);
  const [inputWords, setInputWords] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [initialized, setInitialized] = useState(false);
  const [isGameover, setIsGameOver] = useState(false);

  // Create function to randomise and generate array of words for the game
  const getRandomWords = (array, count) => {
    const shuffledArray = array.slice().sort(() => Math.random() - 0.5);
    return shuffledArray.slice(0, Math.min(count, shuffledArray.length));
  };

  const handleChange = (e) => {
    // Exit early if game is over
    if (isGameover) {
      return;
    }

    const value = e.target.value;

    if (value.endsWith(" ")) {
      if (currentIndex < inputWords.length - 1) {
        setCurrentIndex(currentIndex + 1);
        setInputWords([
          ...inputWords.slice(0, currentIndex),
          value.trim(),
          ...inputWords.slice(currentIndex + 1),
        ]);
      } else {
        setIsGameOver(true);
      }
    } else {
      setInputWords([
        ...inputWords.slice(0, currentIndex),
        value,
        ...inputWords.slice(currentIndex + 1),
      ]);
      console.log(inputWords);
    }
  };

  useEffect(() => {
    // Call the function to set the initial words
    const initialisedWords = getRandomWords(MOCK_DATA, 5);
    setFixedGameWords(initialisedWords);
    setInputWords(Array(initialisedWords.length).fill(""));
    setInitialized(true);
  }, []);

  const renderFixedWords = () => {
    return fixedGameWords.map((word, index) => (
      <div key={index} className="fixed-game-word">
        {word.split("").map((char, charIndex) => {
          let color = "";
          if (
            index < currentIndex ||
            (index === currentIndex && charIndex < inputWords[index].length)
          ) {
            color =
              char === inputWords[index][charIndex] ? "correct" : "incorrect";
          }
          return (
            <span key={charIndex} className={color}>
              {char}
            </span>
          );
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
