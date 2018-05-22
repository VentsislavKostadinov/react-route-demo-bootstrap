import React, { Component } from 'react';
import './App.css';
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Routes from "./Routes";
import Bootstrap from "bootstrap/dist/css/bootstrap.min.css";


class App extends Component {
  render() {
    return (
      <div className= "App">
        <Navigation/>
        <Header />
          <Routes />

      </div>
    );
  }
}

export default App;
