const express = require('express');
const UserController = require('../controller/userController');
const DifyAiController = require('../controller/difyAiController');
const router = express.Router();

router.post('/users', UserController.createUser);
router.get('/users', UserController.getAllUsers);
router.post('/ask', DifyAiController.askQuestion);


module.exports = router;