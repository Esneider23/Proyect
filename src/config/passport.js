const passport = require("passport");
const LocalStrategy =  require("passport-local").Strategy;

const User = require('../models/User');

passport.use('local-signin', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, function(req,email,password,done)
{
  User.findOne({'email': email},
  function(err,user){
    if(err)
    {
      return done(err);
    }
    if(!user)
    {
      return done(null, false, { message: "Not User found." });
    }
    if(!user.matchPassword(password))
    {
      return done(null, false, { message: "Incorrect Password." });
    }
    return done(null, user)
  })
}))
    
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

module.exports = passport;