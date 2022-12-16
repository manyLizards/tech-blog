//route commands to Model and View ports

const router = require('express').Router()

//GET route for getting all of the posts for the homepage

router.get('/', async (req, res) => {
    res.render('all');
});

module.eports = router;