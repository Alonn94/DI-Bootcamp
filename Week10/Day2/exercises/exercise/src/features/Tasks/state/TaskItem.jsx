import TaskRemove from "./TaskRemove";

const TaskItem = ({task}) => {

    return (

        <>
        
        <div>{task.task}{task.duedate}
        <TaskRemove id={task.id}/> 
        </div>
        </>
    )


}

export default TaskItem;