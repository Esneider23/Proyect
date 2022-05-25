const express = require('express');
const router = express.Router();
const Swal = require('sweetalert2')
const controller = require('../controllers/controllers');
const {isAuthenticated} = require('../helpers/auth')

router.get('/signin', (req,res)=>{
    res.render('signin');
})

router.get('/signup', isAuthenticated, (req,res)=>{
    res.render('signup');
})


router.get('/logout', (req,res)=>
{
    req.logout();
    res.render('logout',{
        alert:true,
        alertTitle: "Exito",
        alertMessage: "Usted a salido con exito",
        alertIcon: 'success',
        ShowConfirmButton:false,
        timer: 1500,
        ruta:''
    })
})


router.post('/signin', controller.Signin);
router.post('/signup', controller.Signup);


module.exports = router;