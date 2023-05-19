const { Router } = require('express');
const { createSubcategories } = require('../controllers/subcategories.controllers');

const router = Router();

router.post("/subcategories", createSubcategories);
module.exports = router;


