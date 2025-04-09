import {createAsyncThunk, nanoid, createSlice} from '@reduxjs/toolkit';


const initialState = {
    users:[],
    status:"",
    error: null,
};

export const getUsers = createAsyncThunk("users/getinfo", async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return data;
});


const userSlice= createSlice ({
    name: "user",
    initialState,
    reducers: {

        adduser:(state,action) => {
            state.users.push({
                id: nanoid(),
                name: action.payload.name,
                email: action.payload.email,
            });
        },

        addyserprepare: {
            prepare(name, email) {
                return {payload: {id: nanoid(), name, email}};
            },
            reducer(state, action) {
                state.users.push(action.payload);
            },
        },
   
    },

    extraReducers: (builder) => {
        builder
            .addCase(getUsers.pending, (state) => {
                state.status = "loading";
                state.error=null;
            })
            .addCase(getUsers.rejected, (state,action) => {
                state.status="error";
                state.error = action.error.message;
            })
            .addCase(getUsers.fulfilled, (state,action) => {
                state.status = "";
                state.users = action.payload;
            });

    },
});


export const {adduser, adduserprepare} = userSlice.actions;
export default userSlice.reducer;



