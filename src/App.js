import React from 'react';
import About from './pages/about'
import Menu from './pages/menu' 
import Home from './components/home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/menu" element={<Menu/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
