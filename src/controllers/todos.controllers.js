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

const deleteTodo = async (req, res) => {
    try {
        const { id } = req.body;
        await Todo.destroy({
            where:{id}
        });
        res.status(204).send()
    } catch (error) {
        res.status(400).json(error);        
    }
};

app.delete('/todos/:id', async (req,res)=>{
    try {
        const { id } = req.params;    
        await Todos.destroy({
            where:{id}
        });
        res.status(204).send()
    } catch (error) {
        res.status(400).json(error)
    }
});

module.exports = {
    createTodo,
    deleteTodo,
};