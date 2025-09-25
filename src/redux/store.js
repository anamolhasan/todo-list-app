import { configureStore } from '@reduxjs/toolkit'

import todoReducer from '../redux/features/todos/todoSlice'

export default configureStore({
  reducer: {
    Todos: todoReducer
  }
})