const { Router } = require('express');
const { 
    createTodo_subcategories,
    getTodo_subcategoriesAll,
    getTodo_SubCategoryById,
    getTodo_SubCategoryBySubcategoriesId,
    updateTodo_subcategories,
    deleteTodo_subcategories,
} = require('../controllers/todos_subcategories.controllers');
const router = Router();

router.post("/todos_subcategories", createTodo_subcategories);
router.get("/todos_subcategories", getTodo_subcategoriesAll);
router.get("/todos_subcategories/Id/:Id", getTodo_SubCategoryById);
router.get("/todos_subcategories/:subcategoriesId", getTodo_SubCategoryBySubcategoriesId);
router.put("/todos_subcategories/:id", updateTodo_subcategories);
router.delete("/todos_subcategories/:id", deleteTodo_subcategories);
module.exports = router;
