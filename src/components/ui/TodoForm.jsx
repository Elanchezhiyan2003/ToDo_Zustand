import React, { useState } from 'react'
import { Input } from './input';
import { Button } from './button';
import { useStore } from '@/store';


const TodoForm = () => {
    const [text, setText] = useState("");
    const addTodo = useStore((state)=> state.addTodo);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.trim() !== ""){
            addTodo({text, completed:false})
            setText("");
        }
    };
  return (
    <form onSubmit={handleSubmit}>
        <div className='flex flex-row gap-4' >
        <Input type='text' className='form-control' value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter New Todo' />        
        <Button type='submit'>Add ToDo</Button>
        </div>
    </form>

  )
}

export default TodoForm;