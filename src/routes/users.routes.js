const { Router } = require('express');
const { createUser, deleteUser } = require('../controllers/users.controllers')
const router = Router();

router.post("/users", createUser);
router.delete("/users/:id", deleteUser);
module.exports = router;