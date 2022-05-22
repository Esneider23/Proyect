const User = require('../models/User');
const passport = require('passport');

exports.Signup = async (req, res)=>{
   const name = req.body.name;
   const email = req.body.email;
   const password = req.body.password;
   const emailUser = await User.findOne({email:email});
   if(emailUser)
   {
       res.redirect('/signup')
    }
    const newUser = new User({name, email, password});
    newUser.password =  await newUser.encryptPassword(password);
    await newUser.save();
    res.redirect('/signin')
}   

exports.Signin = passport.authenticate('local', {
    successRedirect:"/",
    failureRedirect: '/signin',
});
  