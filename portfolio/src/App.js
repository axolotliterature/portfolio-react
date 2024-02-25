import React from 'react';
import Navbar from './NavBar';
import Home from './pages/home';
import Projects from './pages/projects';
import Writing from './pages/writing';
import { Route, Routes } from "react-router-dom"

function App() { 
  return (
    <>
      <Navbar />
      <div className="text-gray-400 bg-gray-900 body-font">
        <Routes>
          <Route path="/" element={<Home />} className="mr-5 hover:text-white"/>
          <Route path="/projects" element={<Projects />} />
          <Route path="/writing" element={<Writing />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
