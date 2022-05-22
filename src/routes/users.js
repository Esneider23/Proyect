const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers');
const {isAuthenticated} = require('../helpers/auth')

router.get('/signin', (req,res)=>{
    res.render('signin')
})

router.get('/signinC', (req,res)=>{
    res.render('signinC')
})


router.get('/signupCl', (req,res)=>{
    res.render('signupc');
})

router.get('/signupAd', isAuthenticated, (req,res)=>{
    res.render('signup');
})

router.get('/logout', (req,res)=>
{
    req.logout();
    res.redirect('/');
})


router.post('/signin', controller.Signin);
router.post('/signinC', controller.SigninC);
/*router.post('/signupAd', controller.Signup);*/
router.post('/signupCl', controller.Signup);


module.exports = router;