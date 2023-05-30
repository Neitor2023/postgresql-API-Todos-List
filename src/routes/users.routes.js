const { Router } = require('express');
const { createUser, deleteUser } = require('../controllers/users.controllers')
const router = Router();

router.post("/user", createUser);
router.delete("/user/:id", deleteUser);
module.exports = router;