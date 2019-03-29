import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Page from './page'

class App extends Component {
  render() {
    return (
      <div className="App" key={'app'}>
        <Page pageName={'Preposition copy'} key={'page'}> 
          </Page>
      </div>
    );
  }
}

export default App;
