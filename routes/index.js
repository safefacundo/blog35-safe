const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/',(req, res) => {
  Post.find().exec((err, posts) => {
res.render('index', { posts: posts });
});
});

router.get('/newpost',(req, res) => {
res.render('newpost');
});

router.get('/posts/:id',(req, res) => {
res.render ('post');
});

module.exports = router;
