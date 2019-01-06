import React, { Component } from 'react'
import NavBar from './NavBar'
import Header from './Header'
import Footer from './Footer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css'

class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header/>
          <NavBar/>
          <div className="App-main">
            {this.props.children}
          </div>
          <Footer/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
