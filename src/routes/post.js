const express = require('express');
const router = express.Router();

const { get_post_by_id } = require('../controllers/postController');


router.route('/post/:id').get(get_post_by_id);

module.exports = router;