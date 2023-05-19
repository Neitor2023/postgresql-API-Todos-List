const Subcategories = require('../models/subcategories.model');

const createSubcategories = async (req, res) => {
    try {
        const newCategories = req.body;
        await Subcategories.create(newCategories);
        res.status(201).send();
    } catch (error) {
        res.status(400).json(error);        
    }
};

module.exports = {
    createSubcategories,
};