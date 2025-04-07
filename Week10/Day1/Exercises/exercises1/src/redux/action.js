

export const add_task = (task) => {
    return {
        type: "add_task",
        payload: task
    };
};

export const remove_task = () => {
    return {
        type: "remove_task",
    };
};

