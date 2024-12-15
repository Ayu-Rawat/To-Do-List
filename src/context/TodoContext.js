import {createContext, useContext} from 'react';

export const TodoContext = createContext({
    todos:[
        {
            id:Number,
            todoTitle:String,
            completed:Boolean,
        }
    ],
    addTodo: (todo) => {}, 
    updateTodo: (todo,id) => {},
    deleteTodo: (id) => {},
    isCompleted: (id) => {}
})

export const useTodoContext = () => {
    return useContext(TodoContext)
}

export const Todoprovider = TodoContext.Provider