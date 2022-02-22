import './App.css';

import React from 'react';
import { Route, Routes } from 'react-router';

import Header from './components/Header';
import Tets1 from './pages/Test1';
import Tets2 from './pages/Test2';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Tets1 />} />
        <Route path="/test" element={<Tets2 />} />
      </Routes>
      <div>FOOTER TEST</div>
    </div>
  );
}

export default App;
