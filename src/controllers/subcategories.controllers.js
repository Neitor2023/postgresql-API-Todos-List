const Subcategories = require('../models/subcategories.model');

const createSubcategories = async (req, res) => {
    try {
        const newSubcategories = req.body;
        await Subcategories.create(newSubcategories);
        res.status(201).send();
    } catch (error) {
        res.status(400).json(error);
    }
};

const updateSubcategory = async (req, res) => {
    try {
        const { id } = req.params;    
        const { subcategory } = req.body;
        await Subcategories.update({subcategory},{
            where:{ id }
        });
        res.status(204).send()
    } catch (error) {
        res.status(400).json(error)
    }
  };

const getSubcategoriesAll = async (req, res) => {
    try {
        const subcategories = await Subcategories.findAll({
        });
        res.json(subcategories);
    } catch (error) {
        res.status(400).json(error);
    }
};

const getSubcategoryById = async (req, res) => {
    try {
        const { Id } = req.params;
        const subcategory = await Subcategories.findByPk(Id, {
        });
        res.json(subcategory);
    } catch (error) {
        res.status(400).json(error)
    }
};

const deleteSubcategory = async (req, res) => {
    try {
        const { id } = req.params;
        await Subcategories.destroy({
            where: { id },
        });
        res.status(204).send()
    } catch (error) {
        res.status(400).json(error);
    }
};


module.exports = {
    createSubcategories,
    updateSubcategory,
    getSubcategoriesAll,
    getSubcategoryById,
    deleteSubcategory,
};