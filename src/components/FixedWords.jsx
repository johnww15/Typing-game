import { MOCK_DATA } from "../data/MockData";
import { useState, useEffect } from "react";
import EndScreen from "./EndScreen";

export default function FixedWords() {
  const [fixedGameWords, setFixedGameWords] = useState([]);
  const [inputWords, setInputWords] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [initialized, setInitialized] = useState(false);
  const [isGameover, setIsGameOver] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  // Create function to randomise and generate array of words for the game
  const getRandomWords = (array, count) => {
    const shuffledArray = array.slice().sort(() => Math.random() - 0.5);
    return shuffledArray.slice(0, Math.min(count, shuffledArray.length)); //in case array.length is less than count
  };

  const handleTextAreaChange = (e) => {
    // Exit early if game is over
    if (isGameover) {
      return;
    }
    const value = e.target.value;

    //start time is only set when user types and not when they select the text area
    if (!startTime && value) {
      setStartTime(Date.now);
    }

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
        setEndTime(Date.now());
      }
    } else {
      setInputWords([
        ...inputWords.slice(0, currentIndex),
        value,
        ...inputWords.slice(currentIndex + 1),
      ]);
    }
  };

  useEffect(() => {
    // Call the function to set the initial words
    const initialisedWords = getRandomWords(MOCK_DATA, 40);
    setFixedGameWords(initialisedWords);
    setInputWords(Array(initialisedWords.length).fill(""));
    setCurrentIndex(0);
    setInitialized(true);
    setStartTime(null);
    setEndTime(null);
    setIsGameOver(false);
  }, [initialized]);

  const renderFixedWords = () => {
    return fixedGameWords.map((word, index) => (
      <div key={index} className="fixedwords-word">
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
      <h1>Typing Game</h1>
      <p>Press "spacebar" after submitting each word</p>
      <div data-testid="fixedwords" className="fixedwords-display">
        {initialized && renderFixedWords()}
      </div>
      {initialized && (
        <textarea
          value={inputWords[currentIndex]}
          onChange={handleTextAreaChange}
        />
      )}
      {isGameover && (
        <EndScreen
          setInitialized={setInitialized}
          endTime={endTime}
          startTime={startTime}
          wordCount={inputWords.length}
        />
      )}
    </>
  );
}
