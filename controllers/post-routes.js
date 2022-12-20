//route commands to Model and View ports

const router = require('express').Router();

//pull post model
const Post = require('../models/Post');

//GET route for getting all of the posts for the homepage

router.get('/', async (req, res) => {
    res.render('all');
});

//Get a post
router.get('/post/:num', async (req, res) => {
    return res.render('post', posts[req.params.num - 1]);
});

module.exports = router;