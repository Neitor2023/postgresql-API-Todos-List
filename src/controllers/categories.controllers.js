const Category = require('../models/categories.model');

const createCategory = async (req, res) => {
  try {
    const newCategory = req.body;
    await Category.create(newCategory);
    res.status(201).send();
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateCategory = async (req, res) => {
  try {
      const { id } = req.params;    
      const { category } = req.body;
      await Category.update({category},{
          where:{ id }
      });
      res.status(204).send()
  } catch (error) {
      res.status(400).json(error)
  }
};

const getCategoryAll = async (req, res) => {
  try {
    const category = await Category.findAll({
    });
    res.json(category);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getCategoryById = async (req, res) => {
  try {
    const { Id } = req.params;
    const category = await Category.findByPk(Id, {
    });
    res.json(category);
  } catch (error) {
    res.status(400).json(error)
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    await Category.destroy({
      where: { id },
    });
    res.status(204).send()
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  createCategory,
  updateCategory,
  getCategoryAll,
  getCategoryById,
  deleteCategory,
};