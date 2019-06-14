import React from 'react';
import { store,addTodo } from './redux_counter'

class AddTodo extends React.Component{
    constructor(){
        super();

        this.state={
            todo:''
        }
    }

    onTodoChange=(e)=>{
        this.setState({
            todo:e.target.value
        })
    }

    addTodoValue=()=>{
        store.dispatch(addTodo(this.state.todo))
    }

    render(){
        return(
            <div>
                <input type="text" onChange={this.onTodoChange} name="todo"/>
                <button onClick={this.addTodoValue}>Add Todo</button>
            </div>
        )
    }
}

export default AddTodo;