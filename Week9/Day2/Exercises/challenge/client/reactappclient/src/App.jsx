import { useState, useEffect } from 'react'
import './App.css'
import cors from "cors"

function App() {
  const [message,SetMessage] = useState("");
  const [input, setInput] = useState("");
  const [response, setResponse] =useState("");


useEffect(() => {
  const fetchMessage =async () => {
    try{
      const res = await fetch ("http://localhost:5000/api/hello");
      const data = await res.json();
      setMessage(data.message);
    } catch (error) {
      console.error(error);
    }


    };
    fetchMessage();
  },[]);


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/world", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ input })
      });
      const data = await res.json();
      setResponse(data.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1>{message}</h1>
      <form onSubmit = {handleSubmit}>
        <input 
        type = "text"
        value= {input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="type sth"
        />
      <button type="submit"> Send</button>
      </form>
    </>
  )
}

export default App
