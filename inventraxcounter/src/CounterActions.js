import React from 'react';
import {store, increment, decrement} from './redux_counter'

class CounterActions extends React.Component{
    constructor(){
        super();
    }

    incrementCounter=()=>{
        store.dispatch(increment())
    }

    decrementCounter=()=>{
        store.dispatch(decrement())
    }

    render(){
        return(
            <div>
                <button onClick={this.incrementCounter}>Increment</button>
                <button onClick={this.decrementCounter}>Decrement</button>
            </div>
        )
    }
}

export default CounterActions;