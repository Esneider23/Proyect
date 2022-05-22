const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('../models/User');

passport.use(new LocalStrategy({
    usernameFiled: 'email',
}, async (email, passport, done)=>{
    const user = await User.findOne({email: email});
    if(!user)
    {
        return done(null, false, {message: 'Usuario no existe'});
    }
    else
    {
       const match = await user.mathPassword(password);
       if(match)
       {
           return done(null,user);
       }
       else{
           return done(null, false, {message: 'Contraseña errada'})
       }
    }
}));

passport.serializeUser((user, done) =>
{
    done(null, user.id);
})

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user)=>{
        done(err, user);
    })
})

module.exports = passport;