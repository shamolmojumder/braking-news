import React from 'react';
import './App.css';
import Fragment from './components/Fragment/Fragment';

import Header from './components/Header/Header';

import News from './components/News/News';
import TopHeadline from './components/TopHeadline/TopHeadline';

function App() {
return (
<div>
  <h2>React Button</h2>

  <Header></Header>
  <Fragment></Fragment>
  <TopHeadline></TopHeadline>
</div>
);
}

export default App;