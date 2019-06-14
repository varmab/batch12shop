
import { createStore, combineReducers } from 'redux';

//Actions
const INCREMENT='INCREMENT'
const DECREMENT='DECREMENT'
const ADD_TODO='ADD_TODO'
const REMOVE_TODO='REMOVE_TODO'

export function increment(){
    return {
        type:INCREMENT
    }
}

export function decrement(){
    return {
        type:DECREMENT
    }
}

export function addTodo(todo){
    return {
        type:ADD_TODO,
        todo
    }
}

export function removeTodo(todo){
    return {
        type:REMOVE_TODO,
        todo
    }
}

//Reducer
var counter=(state=0,action)=>{
    console.log(action);
    switch(action.type){
        case 'INCREMENT':
            return state+1;
        case 'DECREMENT':
            return state-1;
        default:
            return state;
    }
}

var todos=(state=[],action)=>{
    console.log(action);
    switch(action.type){
        case ADD_TODO:
            return [
                ...state,
                action.todo
            ]
        case REMOVE_TODO:
            return state.filter((todo)=>{
                return todo!=action.todo
            })
        default:
            return state;
    }
}

var rootReducer=combineReducers({
    counter:counter,
    todos:todos
})

//Store
export const store=createStore(rootReducer);
