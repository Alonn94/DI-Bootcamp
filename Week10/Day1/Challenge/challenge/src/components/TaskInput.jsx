import { useDispatch } from "react-redux";
import { useRef} from "react";
import { addTasks} from "../redux/actions.js";





const TaskInput = () => {
    const nameRef = useRef();
    const dateRef = useRef();
    const dispatch = useDispatch();

    const addNewTask = () => {
        const name= nameRef.current.value;
        const date= dateRef.current.value;
        dispatch(addTasks(name,date));



    }
    
    return (

        <>
        <input ref={nameRef}
        type="text"
        placeholder = "Type new task"/>
        <input ref={dateRef}
        type="date"/>
        <button onClick= {() => addNewTask()}>Add Task</button>

        </>
    )}


export default TaskInput


