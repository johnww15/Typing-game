import React, { useContext } from "react";
import { GameSettingsContext } from "../context/GameSettings";

const DifficultyButtons = () => {
  const { gameSettings, changeDifficulty } = useContext(GameSettingsContext);

  return (
    <div className="difficulty-buttons">
      <button
        className={gameSettings.difficulty === "easy" ? "active" : ""}
        onClick={() => changeDifficulty("easy")}
      >
        Easy
      </button>
      <button
        className={gameSettings.difficulty === "medium" ? "active" : ""}
        onClick={() => changeDifficulty("medium")}
      >
        Medium
      </button>
      <button
        className={gameSettings.difficulty === "hard" ? "active" : ""}
        onClick={() => changeDifficulty("hard")}
      >
        Hard
      </button>
      <button
        className={gameSettings.difficulty === "chaos" ? "active" : ""}
        onClick={() => changeDifficulty("chaos")}
      >
        Absolute Chaos
      </button>
    </div>
  );
};

export default DifficultyButtons;
