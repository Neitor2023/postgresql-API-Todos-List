const { Router } = require('express');
const { 
    createCategory,
    updateCategory,
    getCategoryAll, 
    getCategoryById, 
    deleteCategory
} = require('../controllers/categories.controllers');

const router = Router();

router.post("/categories", createCategory);
router.put("/category/:id", updateCategory);
router.get("/categories", getCategoryAll);
router.get("/category/:Id", getCategoryById);
router.delete("/category/:id", deleteCategory);
module.exports = router;


