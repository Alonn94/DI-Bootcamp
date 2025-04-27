import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { MealResponse, Meal } from '../types/types';
import { fetchData } from '../api/api';


 export const fetchMeals = createAsyncThunk<MealResponse, string>(
    'meals/fetchMeals', 
    async (query:string) => {
        const data = await fetchData(query);
        return data;
    }
);

interface MealState {
    meals: Meal [];
    loading: boolean;
    error: string | null;
    lastQuery: string;
}

const initialState: MealState = {
    meals: [],
    loading: false,
    error: null,
    lastQuery: ''
};

const mealsSlice = createSlice({
    name: "meals",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder 
        .addCase(fetchMeals.pending, (state, action) => {
            state.loading = true;
            state.error = null;
            state.lastQuery = action.meta.arg;
        })
        .addCase(fetchMeals.fulfilled, (state, action) => {
            state.loading = false;
            state.meals = action.payload.meals || [];
        })
        .addCase(fetchMeals.rejected, (state,action) => {
            state.loading = false
            state.error = action.error.message || "something went wrong";
        });
    },
});

export default mealsSlice.reducer;



