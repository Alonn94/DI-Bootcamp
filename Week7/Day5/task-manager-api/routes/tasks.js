import express from "express";
const router = express.Router();
import { readTasks,readTaskByID,createTask,updateTask,deleteTask } from '../controllers/taskController.js';



// Get /tasks (all the tasks)
router.get("/tasks", readTasks);
router.get("/tasks/:id", readTaskByID);

router.post("/tasks", createTask);
router.put("/tasks/:id", updateTask);
router.delete("/tasks/:id", deleteTask);



export default router;





