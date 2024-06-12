import { MOCK_DATA } from "../data/MockData";
import { useState, useEffect } from "react";

export default function FixedWords() {
  const [fixedGameWords, setFixedGameWords] = useState([]);
  // inputWords state gets it's "proper" initial state from the useEffect function below
  const [inputWords, setInputWords] = useState([]);

  // Create function to randomise and generate array of words for the game
  const getRandomWords = (array, count) => {
    const shuffledArray = array.slice().sort(() => Math.random() - 0.5);
    return shuffledArray.slice(0, Math.min(count, shuffledArray.length));
  };

  useEffect(() => {
    // Call the function to set the initial words
    setFixedGameWords(getRandomWords(MOCK_DATA, 5));
    // Reset the state of InputWords with the newly randomised words
    setInputWords(Array(fixedGameWords.length).fill(""));
  }, []);

  return (
    <>
      <h1>FixedWords</h1>
      <div>
        <p data-testid="fixedwords">{fixedGameWords.join(" ")}</p>
        <textarea />
      </div>
    </>
  );
}
