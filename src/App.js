import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import backMusic from './backMusic.mp3';
import HomePage from './HomePage';
import MainPage from './MainPage';

function App() {
  
  
  return (
    <div className="App" >
      <div className="snow"></div>
        <Router>
        <Switch>
          <Route exact path ='/'>
            <HomePage />
          </Route>
          <Route path ='/mainpage'>
            <MainPage/>
          </Route>
        </Switch>
        </Router>
      <audio controls autoPlay loop src={backMusic} id="music">
      </audio>
    </div>
  );
}

export default App;
