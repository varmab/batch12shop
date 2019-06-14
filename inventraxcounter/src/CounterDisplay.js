import React from 'react';
import { store } from './redux_counter'

class CounterDisplay extends React.Component{
    constructor(){
        super();

        this.state={
            count:0
        }

        store.subscribe(()=>{
            var state=store.getState();
            this.setState({
                count:state.counter
            })
        })
    }

    render(){
        return(
            <h1>{this.state.count}</h1>
        )
    }
}

export default CounterDisplay;