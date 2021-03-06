import React, { Component } from 'react';
import AppSection from './components/app-section/AppSection'
import InfoSection from "./components/info-section/InfoSection"
import RightBar from "./components/right-bar/RightBar"
import TitleBar from "./components/title-bar/TitleBar"


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <TitleBar />
          <InfoSection />
          <AppSection />
          <RightBar />
      </div>
    );
  }
}

export default App;
