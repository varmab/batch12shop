import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Welcome from './Welcome'
import Title from './Title'
import Counter from './Counter'
import Friends from './Friends'
import GreetingCard from './GreetingCard';
import Users from './Users'
import Library from './Library'
import Hello from './Hello'

class App extends Component{
  constructor(){
    super();

    this.state={
      count:1
    }
  }

  addToCounter=()=>{
    this.setState({
      count:this.state.count+1
    })
  }

  render(){
    console.log(this.state.count)
    return (
      <div className="App">
        <header className="App-header">
          <Welcome name="Varma" year={2019}/>
          <Welcome year={2019}/>
          <Welcome name="Rani" year={2019}/>
          <button onClick={this.addToCounter}>Add to Counter</button>
        </header>
        <Counter count={this.state.count}/>
      </div>
    )
  };
}

export default App;
