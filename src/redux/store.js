import { configureStore } from '@reduxjs/toolkit'

import todoReducer from '../redux/features/todos/todoSlice'
import preferencesReducer from '../redux/features/preferences/preferencesSlice'

export default configureStore({
  reducer: {
    Todos: todoReducer,
    Preference:preferencesReducer
  }
})