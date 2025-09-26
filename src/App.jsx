
import './App.css'
import Preferences from './components/Preferences'
import ThemeToggle from './components/ThemeToggel'
import TodoList from './components/TodoList'

function App() {
 

  return (
    <div className='flex items-center justify-center flex-col min-h-screen dark:bg-gray-800 dark:text-white '>
      <TodoList />
      <Preferences />
      <ThemeToggle />
    </div>
  )
}

export default App
