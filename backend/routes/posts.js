
const router = require("express").Router();
const posts = require('../controllers/posts.js')

//localhost:5000/posts
router.get('/', posts.getPosts)

router.post('/', posts.createPosts)

module.exports = router