import './App.css';

import React from 'react';
import { Route, Routes } from 'react-router';

import Tets1 from './pages/Test1';
import Tets2 from './pages/Test2';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Tets1 />} />
        <Route path="/test" element={<Tets2 />} />
      </Routes>
    </div>
  );
}

export default App;
