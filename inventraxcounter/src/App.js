import React from 'react';
import logo from './logo.svg';
import './App.css';

import CounterActions from './CounterActions'
import CounterDisplay  from './CounterDisplay'
import AddTodo from './AddTodo'
import Todos from './Todos'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Redux Counter</h1>
      </header>
      <CounterDisplay/>
      <CounterActions/>
      <br/>
      <br/>
      <AddTodo/>
      <Todos/>
    </div>
  );
}

export default App;
