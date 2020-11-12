import React from 'react';

import './App.css';

import NavBar from './components/NavBar'
import Header from './components/Header'
import Page from './components/Page'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Header></Header>
      <Page></Page>
      <Footer></Footer>
    </div>
  );
}

export default App;
