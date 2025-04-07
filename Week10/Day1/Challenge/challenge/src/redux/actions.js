import { ADD_TASK , REMOVE_TASK} from "./reducer";


export const addTasks = (name,date) => {
    return {
        type: ADD_TASK,
        payload: { name, date}
        }
    };

export const removeTasks = (id) => {
    return {
        type: REMOVE_TASK,
        payload: id,
    
    };
};





