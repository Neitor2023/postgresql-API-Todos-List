const { Router } = require('express');
const { 
    createTodo, 
    updateTodo,
    deleteTodo, 
    getTodosAll, 
    getTodoById, 
    getTodoByuserId, 
    updateTodoCompleted,
} = require('../controllers/todos.controllers')
const router = Router();

router.post("/todo", createTodo);
router.get("/todos", getTodosAll);
router.get("/todo/:Id", getTodoById);
router.get("/todos/userId/:userId", getTodoByuserId);
router.put("/todos/completed/:id", updateTodoCompleted);
router.put("/todos/:id", updateTodo);
router.delete("/todos/:id", deleteTodo);
module.exports = router;