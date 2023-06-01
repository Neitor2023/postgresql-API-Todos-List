const Todos = require('../models/todos.models');
const Todos_subcategories = require('../models/todos_subcategories.model');
const Subcategories = require('../models/subcategories.model');

const createTodo_subcategories = async (req, res) => {
  try {
    const newTodo_subcategories = req.body;
    await Todos_subcategories.create(newTodo_subcategories);
    res.status(201).send();
  } catch (error) {
    res.status(400).json(error);
  }
};

const getTodo_subcategoriesAll = async (req, res) => {
  try {
    const todos_subcategories = await Todos_subcategories.findAll({
    });
    res.json(todos_subcategories);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getTodo_SubCategoryById = async (req, res) => {
  try {
    const { Id } = req.params;
    const todos_subcategories = await Todos_subcategories.findByPk(Id, {
      include: [
        {
          model: Todos,
          attributes: ['id', 'title', 'description'],
        },
        {
          model: Subcategories,
          attributes: ['id', 'subcategory'],
        },
      ],
    });
    res.json(todos_subcategories);
  } catch (error) {
    res.status(400).json(error)
  }
};

const getTodo_SubCategoryBySubcategoriesId = async (req, res) => {
  try {
    const { subcategoriesId } = req.params;
    const todos_subcategories = await Todos_subcategories.findAll({
      where:{subcategoriesId},
      include: [
        {
          model: Todos,
          attributes: ['id', 'title', 'description'],
        },
        {
          model: Subcategories,
          attributes: ['id', 'subcategory'],
        },
      ],
    });
    res.json(todos_subcategories);
  } catch (error) {
    res.status(400).json(error)
  }
};

const updateTodo_subcategories = async (req, res) => {
  try {
      const { id } = req.params;    
      const { todosId, subcategoriesId } = req.body;
      await Todos_subcategories.update({todosId, subcategoriesId},{
          where:{ id }
      });
      res.status(204).send()
  } catch (error) {
      res.status(400).json(error)
  }
};

const deleteTodo_subcategories = async (req, res) => {
  try {
    const { id } = req.params;
    await Todos_subcategories.destroy({
      where: { id }
    });
    res.status(204).send()
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  createTodo_subcategories,
  getTodo_subcategoriesAll,
  getTodo_SubCategoryById,
  getTodo_SubCategoryBySubcategoriesId,
  updateTodo_subcategories,
  deleteTodo_subcategories,
};