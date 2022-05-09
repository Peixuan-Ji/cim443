import logo from './assets/img/logo.png';
import './App.css';
import React, { Component } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import List from './components/List';
import About from './components/About';

export default class App extends Component {
  render () {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

       
       <a href="home.html" className="app-link">Enter</a>
        
        
        
      </header>
    </div>
  );
}
}


 // <div>
 //  <Link className="list-group-item" to="/list">Home</Link>
 //  <Link className="list-group-item" to="/about">About</Link>
 //  </div>
  
 //  <div>
 //    <Routes>
 //    <Route path="/list" element={<List/>}></Route>
 //    <Route path="/about" element={<About/>}></Route>
 //    </Routes>
 //  </div>