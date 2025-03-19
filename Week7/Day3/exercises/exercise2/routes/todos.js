const express = require("express");
const router = express.Router();

let todos = [
    {id: 1, task:"groceries", completed: false},
    {id: 2, task:"homework", completed: false}

];

router.get("/",(request,response) => {
response,json(todos);

});

router.post("/",(request, response) => {
    const {task} = request.body ;
    if (!task) {
        return response.status(400).json({error:"Task is missing"});
    }

    const newTodo = {
        id: todos.length +1,
        task,
        completed: false
    };

    todos.push(newTodo);
    res.status(201).json(newTodo);

});

router.put("/:id", (request, response) => {
    const {id} = request.params;
    const {task, completed}= request.body;
    const todo = todos.find((t) => t.id==id);

    if (!todo) {
        return response.status(404).json({error:"to do item could not be found"});
    }
    if (task) todo.task=task;
    if (completed !== undefined) todo.completed=completed;

    response.json(todo);

});

router.delete("/:id", (request, response) => {
    const {id} = request.params;
    todos = todos.filter((t) => t.id!==id);
    response.json({message: "to do deleted"});
});

module.exports=router;








