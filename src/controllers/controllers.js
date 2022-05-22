const User = require('../models/User');
const passport = require('passport');

exports.Signup = async (req, res)=>{
   const name = req.body.name;
   const email = req.body.email;
   const password = req.body.password;
   const emailUser = await User.findOne({email:email});
   if(emailUser)
   {
    res.render('signup',{
        alert:true,
        alertTitle: "Error",
        alertMessage: "Usuario y/o contraseña incorrectas",
        alertIcon: 'error',
        ShowConfirmButton:true,
        timer: '',
        ruta:'signup'
    })
    }
    const newUser = new User({name, email, password});
    newUser.password =  await newUser.encryptPassword(password);
    await newUser.save();
    res.render('signup',{
        alert:true,
        alertTitle: "Registration",
        alertMessage: "Successful Registration!",
        alertIcon: 'success',
        ShowConfirmButton:false,
        timer: 1500,
        ruta:'signin'
    })
}   

exports.Signin = passport.authenticate('local-signin', { 
    successRedirect:"/index",
    failureRedirect: '/signin',
});
  