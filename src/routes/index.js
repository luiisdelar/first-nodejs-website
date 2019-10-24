const express = require('express');
const router = express.Router();

router.get('/', function (req, res){
    res.render('index.html', 
        { title: 'First Node Website' }
    );
});

router.get('/contact', function (req, res){
    res.render('contact.html', 
        { title: 'Contact' }
    );
});

module.exports = router;