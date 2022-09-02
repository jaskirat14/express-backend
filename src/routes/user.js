const express = require('express');
const router = express.Router();

const { create_user } = require('../controllers/userController');


router.route('/signup').post(create_user);


module.exports = router;




