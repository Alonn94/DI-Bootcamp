import { useState } from 'react'


function App() {


  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [sum,setSum] = useState();

  const handleAdd = () => {
    const result = Number(num1) + Number(num2);
    setSum(result)
  }


  return (
    <>
        <h1>Simple React Calculator</h1>
        <input
        type="number"
        placeholder= "Enter number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        />

        <input
        type="number"
        placeholder="Enter another number"
        value = {num2}
        onChange ={(e) => setNum2(e.target.value)}
        />

        <button onClick={handleAdd}> Add them togehter</button>
        <h2>Result: {sum}</h2>
    </>
  )
}

export default App
