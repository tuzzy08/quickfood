import React from 'react';
// import './App.css';
import './assets/css/base.css'
import Preloader from './components/Preloader/Preloader'
import Header from './containers/Header/Header'
import Menu from './containers/Header/Menu/Menu'

function App() {
  return (
    <div className="App">
      <Preloader id="preloader" />
      <Header>
        <Menu />
      </Header>
    </div>
  );
}

export default App;
