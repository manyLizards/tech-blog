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

//route to create/add a post
router.post('/', async(req, res) => {
    try {
        const postData = await Post.create({
            post_title: req.body.post_title,
            post_date: req.body.post_date,
            post_contents: req.body.post_contents
        })
        res.status(200).json(postData);
    } catch (err) {
        res.status(400).json(err)
    }
});

//send data to model so one post can be updated with new data
router.put('/:id', async (req, res) => {
    try {
        const post = await Post.update(
            {
                post_title: req.body.post_title,
                post_contents: req.body.post_contents,
                post_date: req.body.post_date
            },
            {
                where: {
                    id: req.params.id,
                }
            }
        );
        //send data back to handler
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;