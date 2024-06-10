// import { useState } from 'react'
import "./App.css";
import Input from "./components/Input";
import Game from "./components/Game";

export default function App() {
  return (
    <>
      <div>
        <h1>Typing Game</h1>
        <Game />
        <Input />
      </div>
    </>
  );
}
