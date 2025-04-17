import './App.css'
import {Provider} from 'react-redux'
import {store} from './store'
import BookList from './BookList'



function App() {

  return (
    <Provider store = {store}>
      <div className="App">
        <h1>Book Inventory App</h1>
        <BookList/>
      </div>
    </Provider>
  )
}

export default App
