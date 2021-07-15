const express = require('express');
const router = express.Router();

router.get('/find', (req, res) => {
    res.send("Home/ was called");
});

router.get('/add', (req, res) => {
    res.send('home/add was called');
});


module.exports = router;