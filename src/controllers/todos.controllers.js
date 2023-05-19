const Todo = require('../models/todos.models');

const createTodo = async (req, res) => {
    try {
        const newTodo = req.body;
        await Todo.create(newTodo);
        res.status(201).send();
    } catch (error) {
        res.status(400).json(error);        
    }
};

module.exports = {
    createTodo,
};