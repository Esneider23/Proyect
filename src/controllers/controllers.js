const User = require('../models/User');
const passport = require('passport');

exports.Signup = async (req, res)=>{
   const name = req.body.user;
   const email = req.body.email;
   const password = req.body.password;
   const rol = req.body.typ;
   const emailUser = await User.findOne({email:email});
   if(emailUser)
   {
       res.redirect("/signup")
   }
    const newUser = new User({name, email, password,rol});
    newUser.password =  await newUser.encryptPassword(password);
    await newUser.save();
    console.log(newUser);
    res.redirect('/usuarios')
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
    const rol = req.body.typ;
    await User.findByIdAndUpdate(id, {name,email,password,rol});
    res.redirect('/index')
}

exports.delete = async(req,res)=>
{
    await User.findByIdAndDelete(req.params.id);
    res.redirect('/usuarios');
}
