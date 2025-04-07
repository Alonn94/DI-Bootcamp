import {configureStore} from '@reduxjs/toolkit';

import { TaskReducer } from '../redux/reducer.js';

const store = configureStore({
    reducer:{
        TaskReducer: TaskReducer,
    },

})

export default store;





