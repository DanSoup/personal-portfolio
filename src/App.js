import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Intro from './components/intro';
import Anoush from './components/anoush';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Intro}/>
          <Route path="/home" component={Home}/>
          <Route path="/anoush" component={Anoush}/>
        </div>
      </Router>
    );
  }
}

export default App;
