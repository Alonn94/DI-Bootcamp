import {createSlice, } from '@reduxjs/toolkit';
import {v4 as uuidv4} from 'uuid';


const TasksSlice = createSlice({
    name: "task",
    initialState: {
        tasks: []
    },

    reducers: {   
        add: (state, action) => {
            state.tasks.push({
                id: uuidv4(),
                task: action.payload.value,
                date: action.payload.date,
                active: true
            })
        },
        remove: (state, action) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
        },
        active: (state, action) => {
            const task = state.tasks.find((task) => task.id === action.payload);
            if (task) {
                task.active = !task.active;
            }
        },
    }

});


export const {add,remove,active} = TasksSlice.actions;
export default TasksSlice.reducer 


