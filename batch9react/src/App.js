import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Welcome from './Welcome'
import Title from './Title'
import Counter from './Counter'
import Friends from './Friends'
import GreetingCard from './GreetingCard';

class App extends Component{
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Welcome name="Varma" year={2019}/>
          <Welcome year={2019}/>
          <Welcome name="Rani" year={2019}/>
        </header>
        <GreetingCard/>
      </div>
    )
  };
}

export default App;