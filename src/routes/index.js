const express=require('express');
const router = express.Router();
const {isAuthenticated} = require('../helpers/auth')

router.get('/',(req,res)=>{
    res.render('inicio')
   
})

router.get('/rutas',(req,res)=>{
    
   
})

router.get('/index', isAuthenticated, (req,res)=>{ 
    res.render('index');
}) 

router.get('/indexC', isAuthenticated, (req,res)=>{ 
    res.render('indexC');
}) 

module.exports = router;