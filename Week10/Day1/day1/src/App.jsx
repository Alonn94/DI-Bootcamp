import { useState } from 'react';
import {useReducer} from 'react';


const initialState = {
  task:[]
}

const TaskRef = useRef(null);
const TaskReducer = (state, action) => {
if (action.type === "add_task") {
  return { ... state, task: [...state.task, action.payload]}
}
}

const [task, setTask] = useState("");

function App() {

  const  [state,dispatch] = useReducer(TaskReducer, initialState);


  return (
    <>
    <h2>Task Manager</h2>
    <input ref = {TaskRef}
    type="text"
    placeholder = "Type new task"
    value = {task}  
    onSubmit={(e) => {
      e.preventDefault();
      dispatch({type: "add_task", payload: task});
      setTask("");
    }}>
    </input>
    <button type="submit">Add Task</button>
    </>
  )
}

export default App
