const express = require('express');
const validateToken = require('../middleware/validateTokenHandler');
const router = express.Router();

const {registerUser, loginUser, currentUser} = require('../controllers/userController');

router.post('/login',loginUser);

router.post('/register',registerUser);

router.get('/current',validateToken,currentUser);

module.exports = router;