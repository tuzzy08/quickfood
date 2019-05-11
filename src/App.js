import React from 'react';
// import './App.css';
import Preloader from './components/Preloader/Preloader'
import Header from './containers/Header/Header'
import Menu from './containers/Header/Menu/Menu'
import SubHeader from './containers/Header/SubHeader/SubHeader'
import Steps from './components/Steps/Steps'
import RestaurantList from './components/RestaurantList/RestaurantList'

function App() {
  return (
    <div className="App">
      <Preloader id="preloader" />
      <Header>
        <Menu />
        <SubHeader/>
      </Header>
      <Steps />
      <RestaurantList />
    </div>
  );
}

export default App;
