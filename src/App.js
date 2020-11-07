import React from 'react';
import {Button} from 'react-bootstrap';
import './App.css';
import Header from './components/Header/Header';
import News from './components/News/News';

function App() {
  return (
    <div>
    <h2>React Button</h2>
    <Header></Header>
    <News></News>
  </div>
  );
}

export default App;
