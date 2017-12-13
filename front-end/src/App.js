import React, { Component } from 'react';
import logo from './logo.svg';
import './custom-scss/main.css';
import LeftSideBar from './components/LeftSideBar'
import PicturePanel from './components/PicturePanel'
import MainContent from './components/MainContent'
class App extends Component {
  render() {
    return (
      <div className="row">
        <LeftSideBar/>
        <MainContent/>
        <PicturePanel/>

          
      </div>
    );
  }
}

export default App;
