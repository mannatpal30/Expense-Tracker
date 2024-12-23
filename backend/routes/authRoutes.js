

const express = require('express');
const router = express.Router();
const { signup, login, completeLogin } = require('../controllers/authController');

router.post('/signup', signup);
router.post('/login', login);
router.post('/completeLogin', completeLogin);

module.exports = router;





