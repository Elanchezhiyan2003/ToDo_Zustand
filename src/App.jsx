import { useState } from 'react'
import './App.css'
import { Label } from './components/ui/label'
import TodoForm from './components/ui/TodoForm'
import TodoList from './components/ui/TodoList'

function App() {

  return (
    <div className='flex flex-col items-center' >
    <h1 className='py-4'>Zustand ToDo List</h1>
    <TodoForm/>
    <TodoList/>
    </div>
  )
}

export default App;
