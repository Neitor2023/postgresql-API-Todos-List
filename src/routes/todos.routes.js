const { Router } = require('express');
const { createTodo } = require('../controllers/todos.controllers')
const router = Router();

router.post("/todos", createTodo);
module.exports = router;