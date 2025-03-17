class TodoList {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push({ task, completed: false });
        console.log(`Added task: "${task}"`);
    }

    completeTask(taskName) {
        const task = this.tasks.find(t => t.task === taskName);
        if (task) {
            task.completed = true;
            console.log(`Marked task as complete: "${taskName}"`);
        } else {
            console.log(`Task not found: "${taskName}"`);
        }
    }

    listTasks() {
        console.log("\nTodo List:");
        this.tasks.forEach((t, index) => {
            const status = t.completed ? "[✔]" : "[ ]";
            console.log(`${index + 1}. ${status} ${t.task}`);
        });
    }
}

export default TodoList;