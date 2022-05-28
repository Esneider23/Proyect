const express=require('express');
const router = express.Router();
const controller = require('../controllers/controllers');
const {isAuthenticated} = require('../helpers/auth');
const User = require('../models/User');

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

router.get('/actualizar_:id', isAuthenticated, async(req,res)=>{
    const user = await User.findById(req.params.id);
    console.log(user);
    res.render('actualizarp', {user});
})

router.get('/usuarios', isAuthenticated, async (req,res)=>{
    const users = await User.find({user: req.user})
    .sort({date: "desc"})
    .lean();
    res.render('usuarios', {users});
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


router.post('/update_:id', controller.update);
module.exports = router;