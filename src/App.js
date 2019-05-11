import React from 'react';
// import './App.css';
import Preloader from './components/Preloader/Preloader'
import Header from './containers/Header/Header'
import Menu from './containers/Header/Menu/Menu'
import SubHeader from './containers/Header/SubHeader/SubHeader'

function App() {
  return (
    <div className="App">
      <Preloader id="preloader" />
      <Header>
        <Menu />
        <SubHeader/>
      </Header>
    </div>
  );
}

export default App;
