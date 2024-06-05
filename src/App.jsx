// import { useState } from 'react'
import "./App.css";
import { Route, Routes } from "react-router-dom";
import StartPage from "./pages/StartPage";

function App() {
  return (
    <>
      <div>
        <h1>Typing Game</h1>
        <Routes>
          <Route path="/" element={<StartPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
