const express = require('express');
const router = express.Router();

const { create_user, get_all_users } = require('../controllers/userController');


router.route('/signup').post(create_user);
router.route('/users').get(get_all_users);

module.exports = router;




