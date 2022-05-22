const express=require('express');

const router = express.Router();




router.get('/',(req,res)=>{
    res.render('inicio')
   
})

router.get('/rutas',(req,res)=>{
    
    res.render('rutas')
})





module.exports = router;