import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import backMusic from './backMusic.mp3'
import HomePage from './HomePage';

function App() {
  return (
    <div className="App" >
      <Router>
        <Switch>
        <Route exact path ='/'>
          <HomePage/>
        </Route>
        </Switch>
      </Router>
      <audio controls loop src={backMusic}>
      </audio>
    </div>
  );
}

export default App;
