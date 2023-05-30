const { Router } = require('express');
const { 
    createUser, 
    updateUser,
    deleteUser, 
    getUserById, 
    getUserAll 
} = require('../controllers/users.controllers')
const router = Router();

router.post("/user", createUser);
router.put("/user/:id", updateUser);
router.get("/users", getUserAll);
router.get("/user/:Id", getUserById);
router.delete("/user/:id", deleteUser);
module.exports = router;