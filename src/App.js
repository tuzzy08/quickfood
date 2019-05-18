import React from 'react';
// import './App.css';
import Preloader from './components/Preloader/Preloader'
import Header from './containers/Header/Header'
import Content from './containers/Content/Content'
import Menu from './components/Menu/Menu'
import SubHeader from './containers/Header/SubHeader/SubHeader'
import Steps from './components/Steps/Steps'
import RestaurantList from './components/RestaurantList/RestaurantList'
import MobileMenuOverlay from './components/MobileMenuOverlay/MobileMenuOverlay'

function App() {
  return (
    <div className="App">
      <Preloader id="preloader" />
      {/* <Menu /> */}
      <Content />
      <MobileMenuOverlay />
    </div>
  );
}

export default App;
