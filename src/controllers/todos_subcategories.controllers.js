const Todo = require('../models/todos_subcategories.model');

const createTodo_subcategories = async (req, res) => {
    try {
        const newTodo_subcategories = req.body;
        await Todo.create(newTodo_subcategories);
        res.status(201).send();
    } catch (error) {
        res.status(400).json(error);        
    }
};

module.exports = {
    createTodo_subcategories,
};