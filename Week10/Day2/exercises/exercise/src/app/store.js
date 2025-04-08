import { configureStore, combineReducers } from "@reduxjs/toolkit";

import  TasksReducer  from "../features/Tasks/state/TasksSlice.js";


const appReducer = combineReducers({
    TasksReducer,
});

const store= configureStore({
    reducer: appReducer
})


export default store




