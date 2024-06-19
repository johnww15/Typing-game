// GameSettingsContext.js
import React, { createContext, useState } from "react";
import { EASY_DATA } from "../data/EasyData";
import { MEDIUM_DATA } from "../data/MediumData";
import { HARD_DATA } from "../data/HardData";
import { CHAOS_DATA } from "../data/ChaosData";

export const GameSettingsContext = createContext();

const EASY_SETTINGS = {
  difficulty: "easy",
  wordCount: 20,
  data: EASY_DATA,
};

const MEDIUM_SETTINGS = {
  difficulty: "medium",
  wordCount: 25,
  data: MEDIUM_DATA,
};

const HARD_SETTINGS = {
  difficulty: "hard",
  wordCount: 30,
  data: HARD_DATA,
};

const CHAOS_SETTINGS = {
  difficulty: "chaos",
  wordCount: 35,
  data: CHAOS_DATA,
};

const changeStateByDifficulty = (difficulty) => {
  switch (difficulty) {
    case "easy":
      return EASY_SETTINGS;
    case "medium":
      return MEDIUM_SETTINGS;
    case "hard":
      return HARD_SETTINGS;
    case "chaos":
      return CHAOS_SETTINGS;
    default:
      return EASY_SETTINGS;
  }
};

export const GameSettingsProvider = ({ children }) => {
  const [gameSettings, setGameSettings] = useState(EASY_SETTINGS);

  const changeDifficulty = (difficulty) => {
    const newSettings = changeStateByDifficulty(difficulty);
    setGameSettings(newSettings);
  };

  return (
    <GameSettingsContext.Provider value={{ gameSettings, changeDifficulty }}>
      {children}
    </GameSettingsContext.Provider>
  );
};
