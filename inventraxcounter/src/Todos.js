import React from 'react';
import { store } from './redux_counter'

class Todos extends React.Component{
    constructor(){
        super();

        this.state={
            todos:[]
        }

        store.subscribe(()=>{
            var state=store.getState();

            this.setState({
                todos:state.todos
            })
        })
    }

    render(){
        return(
            <div>
                <h1>Todos</h1>
                <ul>
                {
                    this.state.todos.map((todo,index)=>{
                        return <li key={index}>{todo}</li>
                    })
                }
                </ul>
            </div>
        )
    }
}

export default Todos;