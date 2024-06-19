import React from "react";
import "./App.css";
import Game from "./components/Game";
import { GameSettingsProvider } from "./context/GameSettings";
import DifficultyButtons from "./components/DifficultyButtons";

export default function App() {
  return (
    <GameSettingsProvider>
      <div>
        <h1>Typing Game</h1>
        <DifficultyButtons />
        <Game />
      </div>
    </GameSettingsProvider>
  );
}
