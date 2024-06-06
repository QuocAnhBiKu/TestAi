const express = require('express');
const UserController = require('../controller/userController');
const router = express.Router();

router.post('/users', UserController.createUser);
router.get('/users', UserController.getAllUsers);

module.exports = router;