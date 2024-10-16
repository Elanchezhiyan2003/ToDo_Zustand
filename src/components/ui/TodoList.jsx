
import { useStore } from "@/store";
import { Button } from "./button";
import React from "react";

const TodoList = () => {
  const todos = useStore(state => state.todos);
  const toggleTodo = useStore(state => state.toggleTodo);
  const deleteTodo = useStore(state => state.deleteTodo);

  return (
    <div className="p-4 ">
      {todos.map((todo, index) => (
        <div className="todo-item py-1" key={index} >
          <div className="">
          <div className="flex flex-wrap gap-10 box-border h-18 w-18 px-0 py-0 border-0 bg-slate-800 bg-opacity-10 rounded">
            <div className='p-2'>
          <span className={todo.completed ? "completed" : ""} >{todo.text}</span>

            </div>
          <div className="py-2 gap-x-2">
            <div className="flex flex-wrap gap-2">
          <Button
            className="bg-green-500"
            disabled={todo.completed}
            onClick={() => toggleTodo(index)}
          >
            Complete
          </Button>
          <Button
            className="bg-red-500"
            onClick={() => deleteTodo(index)}
          >
            Delete
          </Button>
            </div>
          </div>
          </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
