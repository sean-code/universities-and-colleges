import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route}  from 'react-router-dom';
import NavBar from './components/navbar/navbar';
import Home from './components/home/home';
import Search from './components/search/search';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={< Search/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
