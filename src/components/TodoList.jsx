import React, { useState } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/features/todos/todoSlice";

const TodoList = () => {

  const todos = useSelector(state => state.Todos)
  const dispatch = useDispatch()
  const [text, setText] = useState('')

  const handleAddTask = () => {
     if(text.trim()){
        dispatch(addTodo(text))
        setText('')
     }
  }
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <h2 className="text-xl font-bold">Todo List App</h2>
      <div className="flex space-x-2">
        <input
        value={text}
        onChange={(e)=> setText(e.target.value)}
          className="px-4 py-2 border border-gray-500 rounded text-black placeholder:text-black"
          placeholder="Add a todo"
          type="text"
          name=""
          id=""
        />
        <button onClick={handleAddTask} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-800">
          Add
        </button>
      </div>

      <div>
        <ul className="w-full max-w-md">
           {
            todos.length > 0 ? todos.map((todo) => (
                 <li key={todo.id} className="flex justify-between items-center px-4 py-4 border-b space-x-10">
                <span>{todo.text}</span>
                <button className="text-red-500 hover:underline">Remove</button>
            </li> 
            )) : <div>No todo Items</div>
           } 
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
