import React from 'react';

class Todos extends React.Component{
    constructor(){
        super();

        this.state={
            todos:[],
            todo:''
        }
    }

    onTodoChange=(e)=>{
        var todo=e.target.value;
        console.log(todo);
        this.setState({
            todo:todo
        })
    }

    addTodo=()=>{
        this.setState({
            todos:[
                ...this.state.todos,
                this.state.todo
            ]
        })
    }

    render(){
        return(
            <div>
                <h1>Todos</h1>
                <input type="text" onChange={this.onTodoChange} name="todo"/>
                <button onClick={this.addTodo}>Add</button>
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