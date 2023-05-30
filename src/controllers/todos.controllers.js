const Todo = require('../models/todos.models');
const Users = require("../models/users.model");
const Subcategories = require("../models/subcategories.model");
const Categories = require("../models/categories.model");
const Todos_subcategories = require("../models/todos_subcategories.model");


const createTodo = async (req, res) => {
  try {
    const newTodo = req.body;
    await Todo.create(newTodo);
    res.status(201).send();
  } catch (error) {
    res.status(400).json(error);
  }
};

const getTodosAll = async (req, res) => {
  try {
    const todos = await Todo.findAll({
      attributes: ['id', 'userId', 'categoryId', 'title', 'description', 'completed'],
      include: [
        {
          model: Users,
          attributes: ['id', 'username'],
        },
        {
          model: Categories,
          attributes: ['id', 'category'],
        },
        {
          model: Todos_subcategories,
          attributes: ['id', 'todosId', 'subcategoriesId'],
          include:
          {
            model: Subcategories,
            attributes: ['id', 'subcategory'],
          },
        },
      ],
    });
    res.json(todos);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getTodoById = async (req, res) => {
  try {
    const { Id } = req.params;
    const todo = await Todo.findByPk(Id, {
      attributes: ['id', 'userId', 'categoryId', 'title', 'description', 'completed'],
      include: [
        {
          model: Users,
          attributes: ['id', 'username'],
        },
        {
          model: Categories,
          attributes: ['id', 'category'],
        },
        {
          model: Todos_subcategories,
          attributes: ['id', 'todosId', 'subcategoriesId'],
          include:
          {
            model: Subcategories,
            attributes: ['id', 'subcategory'],
          },
        },
      ],
    });
    res.json(todo);
  } catch (error) {
    res.status(400).json(error)
  }
};

const getTodoByuserId = async (req, res) => {  
  try {
      const {userId} = req.params;
      const todos = await Todo.findAll({
          where:{userId},
          attributes: ['id', 'userId', 'categoryId', 'title', 'description', 'completed'],
          include: [
              {
                  model: Users,
                  attributes: ['id', 'username'],
              },
              {
                  model: Categories,
                  attributes: ['id', 'category'],
              },
              {
                  model: Todos_subcategories,
                  attributes: ['id','todosId', 'subcategoriesId'],
                  include: 
                      {
                          model: Subcategories,
                          attributes: ['id', 'subcategory'],
                      },
              },
          ],
      });
      res.json(todos);
  } catch (error) {
      res.status(400).json(error);
  }
};

const updateTodo = async (req, res) => {
  try {
      const { id } = req.params;    
      const { title, description } = req.body;
      await Todo.update({title, description},{
          where:{ id }
      });
      res.status(204).send()
  } catch (error) {
      res.status(400).json(error)
  }
};

const updateTodoCompleted = async (req, res) => {
  try {
      const { id } = req.params;    
      const { completed } = req.body;
      await Todo.update({completed},{
          where:{ id }
      });
      res.status(204).send()
  } catch (error) {
      res.status(400).json(error)
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    await Todo.destroy({
      where: { id }
    });
    res.status(204).send()
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  createTodo,
  updateTodo,
  getTodosAll,
  getTodoById,
  getTodoByuserId,
  updateTodoCompleted,
  deleteTodo,
};