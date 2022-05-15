const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const jwtConfig = require('../config/jwtConfig');

router.post('/register', userController.register);
router.post('/authenticate', userController.authenticate);
// Private router
router.get('/userprofile', jwtConfig.verifyJwtToken, userController.userProfile);

module.exports = router;