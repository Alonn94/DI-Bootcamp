import {v4 as uuidv4} from "uuid";

export const ADD_TASK = "add_task";
export const REMOVE_TASK = "remove_task";



const initialState = {
    tasks: [],
};


export const TaskReducer = (state = initialState, action) => {
    if(action.type === ADD_TASK) {
        const newTasks = [ ...state.tasks];
        newTasks.push({ id: uuidv4(),
            name: action.payload.name,
            date: action.payload.date,
            active:true,
        });
        return {...state,tasks:newTasks}
    }
    else if (action.type === REMOVE_TASK) {
        return {
        ...state,
        tasks : state.tasks.filter((item) => item.id !== action.payload),
    };
    }return state;

    }


