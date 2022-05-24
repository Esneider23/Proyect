const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers');
const {isAuthenticated} = require('../helpers/auth')

router.get('/signin', (req,res)=>{
    res.render('signin')
})


router.get('/logout', (req,res)=>
{
    req.logout();
    res.redirect('/');
})


router.post('/signin', controller.Signin);
router.post('/signup', controller.Signup);


module.exports = router;