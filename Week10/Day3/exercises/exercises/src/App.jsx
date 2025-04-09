import { useState } from 'react'
import {Provider} from 'react-redux'
import store from "./store"
import './App.css'
import Users from './features/Users'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <div>
      <h2>Fetching User Data with Redux Thunk</h2>
      <Users />
      </div>
    </Provider>

  );
};

export default App
