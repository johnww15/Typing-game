import React, { useContext } from "react";
import { GameSettingsContext } from "../context/GameSettings";

export default function DifficultyButtons() {
  const { changeDifficulty, gameSettings } = useContext(GameSettingsContext);

  return (
    <div>
      <button onClick={() => changeDifficulty("easy")}>Easy</button>
      <button onClick={() => changeDifficulty("medium")}>Medium</button>
      <button onClick={() => changeDifficulty("hard")}>Hard</button>
      <button onClick={() => changeDifficulty("chaos")}>Absolute Chaos</button>
      <p>current difficulty: {gameSettings.difficulty}</p>
    </div>
  );
}
