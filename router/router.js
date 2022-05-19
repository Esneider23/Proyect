const express=require('express');

const router = express.Router();
const auth = require('../middlewares/auth');
const User = require('../controllers/User');



router.get('/',(req,res)=>{
    res.render('inicio')
   
})

router.get('/rutas',(req,res)=>{
    
    res.render('rutas')
})

router.get('/signin', (req,res)=>{
    res.render('inicio_seccion');
})

router.post('/signin', User.signIn);
router.post('/signup', User.signUp);

module.exports = router;