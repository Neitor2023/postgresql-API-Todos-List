const { Router } = require('express');
const { createTodo_subcategories } = require('../controllers/todos_subcategories.controllers');
const router = Router();

router.post("/Todos_subcategories", createTodo_subcategories);
module.exports = router;
