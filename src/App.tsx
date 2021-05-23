import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import PlayQuiz from "./Pages/PlayQuiz";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:quizName" element={<PlayQuiz />} />
      </Routes>
    </div>
  );
}

export default App;
