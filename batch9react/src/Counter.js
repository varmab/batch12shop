import React, {Component} from 'react';

class Counter extends Component{
    constructor(props){
        super(props);

        this.state={
            count:props.count
        }
    }

    componentWillReceiveProps(newProps){
        this.setState({
            count:newProps.count
        })
    }

    increment=()=>{
        this.setState({
            count:this.state.count+1
        })
    }

    decrement=()=>{
        this.setState({
            count:this.state.count-1
        })
    }

    render(){
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        )
    }
}

export default Counter;