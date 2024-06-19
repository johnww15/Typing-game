// import { useState } from 'react'
import "./App.css";
import Game from "./components/Game";

export default function App() {
  return (
    <>
      <div>
        <h1>Typing Game</h1>
        <button>easy</button>
        <button>medium</button>
        <button>hard</button>
        <Game />
      </div>
    </>
  );
}
