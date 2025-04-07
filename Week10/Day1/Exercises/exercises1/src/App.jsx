import { useState, useContext } from 'react'
import Tasklist from './components/Tasklist'
import './App.css'

export const TaskContext = createContext()

function App() {
  const [count, setCount] = useState(0)

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      <Tasklist />
    </TaskContext.Provider>
  )
}

export default App
