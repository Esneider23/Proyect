const User = require('../models/User');
const passport = require('passport');

exports.Signup = async (req, res)=>{
    const {name, email, password} = req.body;
    const emailUser = await User.findOne({email: email});
    if(emailUser)
        {
            res.render('signup',{
                alert:true,
                alertTitle: "Error",
                alertMessage: "El correo ya esta registrado",
                alertIcon: 'error',
                ShowConfirmButton:true,
                timer: '',
                ruta:'signup'
            })
        }
        const newUser = new User({name, email, password});  
        newUser.password = await newUser.encryptPassword(password);
        await newUser.save();
        res.render('signup',{
            alert:true,
            alertTitle: "Registration",
            alertMessage: "Successful Registration!",
            alertIcon: 'success',
            ShowConfirmButton:false,
            timer: 2000,
            ruta:'signin'
        })
        console.log(req.body);
}

exports.Signin = passport.authenticate("local", {
    successRedirect: "/index",
    failureRedirect: "/signin",
    failureFlash: true,
  });
  