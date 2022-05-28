const User = require('../models/User');
const passport = require('passport');

exports.Signup = async (req, res)=>{
   const name = req.body.name;
   const email = req.body.email;
   const password = req.body.password;
   const pass = req.body.password;
   const emailUser = await User.findOne({email:email});
   if(emailUser)
   {
       res.redirect("/signup")
   }
    const newUser = new User({name, email, password,pass});
    newUser.password =  await newUser.encryptPassword(password);
    await newUser.save();
    console.log(newUser);
}   

exports.Signin = passport.authenticate('local-signin', {
    successRedirect: '/index',
    failureRedirect: '/signin'
});


exports.update = async (req,res) =>
{
    const id = req.body.id;
    const name = req.body.user;
    const email = req.body.email;
    const password = req.body.password;
    const pass = req.body.password;
    await User.findByIdAndUpdate(id, {name,email,password,pass});
    res.redirect('/perfil')
}

