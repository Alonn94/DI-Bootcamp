//read json file with tasks
import fs from "fs";

let tasks = [];

export const readFile = () => {
    fs.readFile("./tasks.json", "utf8", (err, data) => {
        if (err) {
            console.error("Error reading tasks:", err);
            return;
        }

        tasks = JSON.parse(data);
        console.log("Tasks:", tasks);
    });
};

// Initialize tasks by reading the file
readFile();

// Get /tasks (all the tasks)

export const readTasks = (req, res) => {
    res.json(tasks);
};

// Get /tasks/:id (a single task)
export const readTaskByID = (req, res) => {
    const id = req.params.id;
    const task = tasks.find((task) => task.id == id);
    res.json(task);
};

// Post /tasks (create a task)
export const createTask = (req, res) => {
    const task = req.body;
    if (!task) {
        res.status(400).json({ error: "Task is required" });
        return;
    }
    tasks.push(task);
    res.json(task);
    writeFile();

};

// Put /tasks/:id (update a task)

export const updateTask = (req, res) => {
    const id = req.params.id;
    const task = req.body;
    const index = tasks.findIndex((task) => task.id == id);
    tasks[index] = task;
    res.json(task);
    writeFile();


};
// Delete /tasks/:id (delete a task)
export const deleteTask = (req, res) => {
    const id = req.params.id;
    const index = tasks.findIndex((task) => task.id == id);
    tasks.splice(index, 1);
    res.json(tasks);
    writeFile();

};



export const writeFile = () => {
    fs.writeFile("./tasks.json", JSON.stringify(tasks), (err) => {
        if (err) {
            console.error("Error writing tasks:", err);
        } else {
            console.log("Tasks saved to file");
        }
    });
}

