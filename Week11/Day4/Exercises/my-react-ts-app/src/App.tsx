import Greeting from './components/Greeting'
import Counter from './components/Counter'
import UserCard from './components/UserCard'
import UserList from './components/UserList'


function App() {

  return (
    <>
<Greeting name= "Alonn" messageCount={10} />
<Counter />
<UserCard name="Alonn" age={31} />
<UserList/>
    </>
  )
}

export default App
