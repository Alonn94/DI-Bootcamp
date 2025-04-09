import {configureStore} from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import userReducer from './features/userSlice.js';



const store = configureStore({

    reducer: {
        userReducer: userReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store
