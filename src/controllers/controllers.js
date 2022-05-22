const User = require('../models/User');
const passport = require('passport');

exports.Signup = async (req, res)=>{
   const name = req.body.name;
   const email = req.body.email;
   const password = req.body.password;
   const typ = req.body.type;
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
    const newUser = new User({name, email, password,typ});
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
    console.log(newUser);
}   

exports.Signin = passport.authenticate('local-signin',
{
    successRedirect:"/index",
    failureRedirect: '/signin',
});

exports.SigninC =passport.authenticate('local-signin',
{
    successRedirect:  '/indexC',
    failureRedirect: '/signinC',
});
