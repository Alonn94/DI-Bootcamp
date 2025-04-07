import {useSelector} from 'react-redux'
import TaskRemove from './TaskRemove';


const TaskList = () => {
    const tasks = useSelector((state) => state.TaskReducer.tasks);
    return (

        <>
        <h2> List of Tasks</h2>
        { tasks && 
        tasks.map(item => {
            return (
                <div key={item.id}>
                    {item.name} {item.date}
                    <TaskRemove id={item.id}/>


            </div>
            );
        })}

        </>
    );
};

export default TaskList


