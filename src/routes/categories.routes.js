const { Router } = require('express');
const { createCategory } = require('../controllers/categories.controllers');

const router = Router();

router.post("/categories", createCategory);
module.exports = router;


