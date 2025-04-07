import {useDispatch} from 'react-redux'
import { removeTasks } from '../redux/actions.js';



const TaskRemove = (id) => {
    const dispatch = useDispatch();
    return(
        <>
        <button onClick={()=> dispatch(removeTasks(id))}>x</button>
        </>


    )
}

export default TaskRemove

