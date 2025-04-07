import {configureStore} from '@reduxjs/toolkit';
import { TaskReducer } from './reducers';

const store = configureStore({
    reducer:{
        TaskReducer: TaskReducer,
    },
})

export default store;

