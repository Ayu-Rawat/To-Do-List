import { useState, useEffect } from 'react'
import { Todoprovider } from './context/TodoContext'
import { TodoForm,TodoItem } from './components'

function App() {
  const [todos, setTodo] = useState([])

  const addTodo = (todo) => {
    setTodo((prev) => [...prev, {id:Date.now(), ...todo}])
  }

  const updateTodo = (id,todo) => {
    setTodo((prev) => prev.map((prevTodo) => (prevTodo.id===id ? todo :prevTodo )))
  }

  const deleteTodo = (id) => {
    setTodo((prev) => prev.filter(prevTodo => prevTodo.id!==id))
  }

  const isCompleted = (id) =>{
    setTodo((prev) => prev.map(prevTodo => prevTodo.id===id ? {...prevTodo,completed:!prevTodo.completed} : prevTodo ))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'))
    if (todos && todos.length>0) {
      setTodo(todos)
    }
  },[])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  },[todos])

  return (
    <Todoprovider value={{todos, addTodo, updateTodo, deleteTodo, isCompleted}}>
    <div className="bg-[#0d1117] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">To Do List</h1>
            <div className="mb-4">
                <TodoForm/> 
            </div>
            <div className="flex flex-wrap gap-y-3">
                {todos.map((todo) => (
                  <div key={todo.id} className='w-full'>
                    <TodoItem todo={todo}/>
                  </div>
                  ))}
            </div>
        </div>
    </div>
    </Todoprovider>
  )
}

export default App
