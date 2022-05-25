const express=require('express');
const router = express.Router();
const Swal = require('sweetalert2');
const {isAuthenticated} = require('../helpers/auth')

router.get('/',(req,res)=>{
    res.render('inicio')
   
})

router.get('/rutas',(req,res)=>{
    res.render('rutas');
})

router.get('/index', isAuthenticated, async (req,res)=>{ 
    res.render('index', {usuario: req.user});
}) 


router.get('/usuarios', isAuthenticated, (req,res)=>{ 
    res.render('Usuarios');
}) 

router.get('/adminrutas', isAuthenticated, (req,res)=>{ 
    res.render('administrarRutas');
}) 

router.get('/Cartagena', (req, res)=>{
    res.render('Cartagena');
})


module.exports = router;