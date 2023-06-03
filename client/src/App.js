import logo from './logo.svg';
import './App.css';
import Home from './components/home/home';
import React, { useState } from 'react';

function App() {
  const [page, setPage] = useState("splash");
  
  return (
    <div className="App">
      <Home page={page} setPage={setPage} />
    </div>
  );
}


export default App;
