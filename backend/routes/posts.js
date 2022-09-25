
const router = require("express").Router();
const getPosts = require('../controllers/posts.js')

//localhost:5000/posts
router.get('/', getPosts)

module.exports = router