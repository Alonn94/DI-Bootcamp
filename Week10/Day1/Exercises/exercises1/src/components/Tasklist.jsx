import {useSelector,useDispatch} from 'react-redux';
import { add_task, remove_task } from '../redux/action';    
import { useRef } from 'react';

const Tasklist = ()=>{
    const tasks = useSelector((state) => state.TaskReducer.tasks);
    const dispatch = useDispatch();
    const TaskRef = useRef(null);


    return (
        <>

        <h2>Tasklist : {tasks}</h2>
        <input ref={TaskRef}
        type="text"
        placeholder = "Type new task"
        />
        <button type="submit" onClick={() => dispatch(add_task(TaskRef.current.value))}>Add Task</button>
        </>
    )
}

export default Tasklist;


