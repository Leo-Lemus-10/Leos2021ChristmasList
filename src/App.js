import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import backMusic from './backMusic.mp3'

function App() {
  return (
    <div className="App" >
      
      <audio controls loop src={backMusic}>
      </audio>
    </div>
  );
}

export default App;
