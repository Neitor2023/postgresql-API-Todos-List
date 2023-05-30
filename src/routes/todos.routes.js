const { Router } = require('express');
const { createTodo, deleteTodo } = require('../controllers/todos.controllers')
const router = Router();

router.post("/todos", createTodo);
router.delete("/todos/:id", deleteTodo);
module.exports = router;