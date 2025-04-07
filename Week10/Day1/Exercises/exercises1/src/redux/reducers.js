const initialState = {
    tasks: ["1", "2", "3"],

}

export const TaskReducer = (state=initialState, action) => {
    if (action.type === "add_task") {
        return { ... state, tasks: [...state.tasks, action.payload]}
    }
    if (action.type === "remove_task") {
        return { ... state, tasks: state.tasks.filter((item) => item !== action.payload)}
    }
    return state;
}





