const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const config = require('./config.js');


//Initialiazaions
const app = express();
require('./database');
require('./config/passport');


//Setings
app.set('port', config.port)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

//Middlewares
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(session({
    secret:'mysecretapp',
    resave:true,
    saveUninitialized:true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//Global variables
app.use((req,res, next)=>{
    res.locals.success_msg= req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    next();

})

//Routes
app.use(require('./routes/index'));
app.use(require('./routes/users'));

//Static files
app.use('/resources', express.static(__dirname + '/public'));

//Server is listenning
app.listen(app.get('port'), () =>{
    console.log(`Server on http://localhost:${app.get('port')}`)
})