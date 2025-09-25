
import './App.css'
import Preferences from './components/Preferences'
import TodoList from './components/TodoList'

function App() {
 

  return (
    <div className='flex items-center justify-center flex-col min-h-screen'>
      <TodoList />
      <Preferences />
    </div>
  )
}

export default App
