const express = require('express');
const router = express.Router();
const User = require('../models/User');
const controller = require('../controllers/controllers');

router.get('/signin', (req,res)=>{
    res.render('signin')
})

router.get('/signup', (req,res)=>{
    res.render('signup');
})

router.get('/logout', (req,res)=>
{
    req.logout();
    res.redirect('/');
})

router.post('/signup', controller.Signup);
router.post('/signin', controller.Signin);
module.exports = router;