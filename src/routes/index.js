const express=require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('inicio')
   
})

router.get('/rutas',(req,res)=>{
    
   
})

router.get('/index',(req,res)=>{
    
    res.send('ok');
}) 

module.exports = router;