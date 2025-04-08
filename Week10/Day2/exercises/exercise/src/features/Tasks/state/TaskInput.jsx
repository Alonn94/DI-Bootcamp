import { add } from "./TasksSlice";
import { useDispatch } from "react-redux";
import { useRef } from "react";

const TaskInput = () => {
  const inputRef = useRef();
  const dateRef = useRef();
  const dispatch = useDispatch();

  const addTask = () => {
    const value = inputRef.current.value;
    const date = dateRef.current.value;
    if (value === "") return;
    dispatch(add({ value, date }));
    inputRef.current.value = "";
  };

  return (
    <>
      <input ref={inputRef} placeholder="Add task" />
      <input ref={dateRef} type="date" />
      <button onClick={() => addTask()}> Add Task</button>
    </>
  );
};

export default TaskInput;
