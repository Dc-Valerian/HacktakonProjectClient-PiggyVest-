import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Header from './Components/Home/Header/Header';
import HomeScreen from './Components/HomeScreen/HomeScreen';
import Footer from './Components/Home/Footer/Footer';
import AllRoutes from './Components/AllRoutes/AllRoutes';
import DashBoard from './Components/DashBoardFolder/DashBoard/DashBoard';

function App() {
  return (
    <div>
      {/* <Header/> */}
      <AllRoutes/>
      <DashBoard/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
