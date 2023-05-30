const { Router } = require('express');
const { 
    createSubcategories, 
    updateSubcategory,
    getSubcategoriesAll, 
    getSubcategoryById, 
    deleteSubcategory 
} = require('../controllers/subcategories.controllers');

const router = Router();

router.post("/subcategories", createSubcategories);
router.put("/subcategory/:id", updateSubcategory);
router.get("/subcategories", getSubcategoriesAll);
router.get("/subcategory/:Id", getSubcategoryById);
router.delete("/subcategory/:id", deleteSubcategory);
module.exports = router;


