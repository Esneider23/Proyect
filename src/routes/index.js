const express=require('express');
const router = express.Router();
const controller = require('../controllers/controllers');
const {isAuthenticated} = require('../helpers/auth');
const User = require('../models/User');
const Ruta = require('../models/Rutas.js');

router.get('/',(req,res)=>{
    res.render('inicio')
   
})

router.get('/rutas',(req,res)=>{
    res.render('rutas');
})

router.get('/index', isAuthenticated, async (req,res)=>{ 
    res.render('index', {usuario: req.user});
}) 


router.get('/adminrutas', isAuthenticated, async (req,res)=>{
    const rutas = await Ruta.find({ruta: req.ruta})
    .sort({date: "desc"})
    .lean();
    res.render('administrarRutas', {rutas});
}) 

router.get('/perfil', isAuthenticated, (req,res)=>{ 
    res.render('perfil', {user:req.user});
}) 

router.get('/actualizar_:id', isAuthenticated, async(req,res)=>{
    const user = await User.findById(req.params.id);
    res.render('actualizarp', {user});
})

router.get('/usuarios', isAuthenticated, async (req,res)=>{
    const users = await User.find({user: req.user})
    .sort({date: "desc"})
    .lean();
    res.render('usuarios', {users});
})


router.get('/compra',(req,res)=>{
    res.render('compra');
})

router.get('/comprar_:id', async(req,res)=>{
    const ruta = await Ruta.findById(req.params.id);
    res.render('comprar_tiquete', {ruta});
})

router.get('/actualizarA_:id', isAuthenticated, async (req,res)=>
{
    const user = await User.findById(req.params.id);
    res.render('actualizarA', {user});
})

router.get('/Crear_rutas', isAuthenticated, async (req, res)=>
{
    res.render('registrar_rutas');
})

router.get('/pago_:id', async (req,res)=>
{
    const ruta = await Ruta.findById(req.params.id)   
    res.render('formulario_pago',{ruta, valor:req.params.valor});
})

router.get('/ruta_:origen', async (req, res)=>{
    const rutas = await Ruta.find({origen: req.params.origen})
    res.render('rutas_existentes', {rutas, origen: req.params.origen});
})

router.get('/completar_compra',(req,res)=>{
    res.render('formulario_pago');
})


router.post('/update_:id', controller.update);
router.post('/delete_:id', controller.delete);
router.post('/CreateRuta', controller.Createrute);
router.post('/delteruta_:id',controller.delteruta);
router.post('/pago_:id', controller.send_menssage);

module.exports = router;