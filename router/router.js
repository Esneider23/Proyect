const express=require('express');

const router = express.Router();




router.get('/',(req,res)=>{
    res.render('inicio')
   
})

router.get('/rutas',(req,res)=>{
    
    res.render('rutas')
})

router.get('/signin', (req,res)=>{
    res.render('inicio_seccion');
})



module.exports = router;