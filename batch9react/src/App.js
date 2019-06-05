import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Welcome from './Welcome'
import Title from './Title'
import Counter from './Counter'

class App extends Component{
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Welcome name="Varma" year={2019}/>
          <Welcome name="Ram"/>
          <Welcome name="Rani"/>
        </header>
        <Counter/>
      </div>
    )
  };
}

export default App;
