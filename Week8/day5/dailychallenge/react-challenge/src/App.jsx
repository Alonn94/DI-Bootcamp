import { useState } from 'react'
import './App.css'

function App() {

  const [languages, setLanguages] = useState ([
    {name:"Php", votes:0},
    {name:"Python", votes:0},
    {name:"Javascript", votes:0},
    {name:"Java", votes:0}

  ]);

  const handleVote = (index) => {
    const 
  }



  return (
    <>
    <h1> Voting Exercise</h1>
    {languages.map((lang,index) => (
      <button onClick={() => handleVote(index)}>{lang.name}</button>
      Votes: {lang.votes}
    ))}
    </>
  )
}

export default App
