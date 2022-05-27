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


router.get('/adminrutas', isAuthenticated, (req,res)=>{ 
    res.render('administrarRutas');
}) 

router.get('/perfil', isAuthenticated, (req,res)=>{ 
    res.render('perfil', {user:req.user});
}) 

router.get('/actualizar', isAuthenticated, (req,res)=>{
    res.render('actualizarp', {user:req.user});
})

router.get('/usuarios', isAuthenticated,(req,res)=>{
    res.render('usuarios');
})

router.get('/Cartagena', (req, res)=>{
    res.render('Cartagena');
})

router.get('/destino',(req,res)=>{
    res.render('destino');
})

router.get('/compra',(req,res)=>{
    res.render('compra');
})

module.exports = router;