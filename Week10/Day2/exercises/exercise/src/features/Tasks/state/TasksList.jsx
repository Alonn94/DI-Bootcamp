import { useSelector } from "react-redux";
import TaskItem from "./Taskitem";

const TasksList = (props) => {
  const tasks = useSelector((state) => state.TasksReducer.tasks);

  return (
    <>
      {tasks.map((item) => {
        return <TaskItem key={item.id} task={item}/>
      })}
    </>
  );
};

export default TasksList;
