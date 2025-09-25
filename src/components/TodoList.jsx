import React from "react";

const TodoList = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <h2 className="text-xl font-bold">Todo List App</h2>
      <div className="flex space-x-2">
        <input
          className="px-4 py-2 border border-gray-500 rounded text-black placeholder:text-black"
          placeholder="Add a todo"
          type="text"
          name=""
          id=""
        />
        <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-800">
          Add
        </button>
      </div>

      <div>
        <ul className="w-full max-w-md">
            <li className="flex justify-between items-center px-4 py-4 border-b space-x-10">
                <span>Item 1</span>
                <button className="text-red-500 hover:underline">Remove</button>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
