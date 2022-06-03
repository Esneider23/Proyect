const User = require('../models/User');
const passport = require('passport');
const Rutas = require('../models/Rutas');
const nodemailer = require('nodemailer');
const { google } = require("googleapis");

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

exports.Createrute = async (req, res)=>
{
    const nombre = req.body.nombre;
    const origen = req.body.origen;
    const destino = req.body.destino;
    const fecha_salida = req.body.fecha_salida;
    const fecha_llegada = req.body.fecha_llegada;
    const precio = req.body.precio;
    const hsalida = req.body.hsalida;
    const hllegada = req.body.hllegada;
    const newRuta = new Rutas({nombre,origen,destino,fecha_salida,fecha_llegada,precio,hsalida,hllegada});
    await newRuta.save();
    console.log(newRuta);
    res.redirect('/adminrutas');

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

exports.delteruta = async(req,res)=>
{
    await Rutas.findByIdAndDelete(req.params.id);
    res.redirect('/adminrutas')
}

exports.send_menssage = (req,res) =>{
    const email = req.body.email;
    const menssag = req.body.mensaje; 
    contentHtmml  =  `
    <h1>Reporte de su compra</h1>
    <ul>
        ${menssag}
    </ul>
`;
    
   var transporter = nodemailer.createTransport(
        {
            service: 'outlook',
            auth: {
                user: 'advance_travel@outlook.com',
                pass: 'AdvanceTravel23'
            }
        }
    )
    var menssage = menssag;
    var mailOptions = 
    {
        from: 'advance_travel@outlook.com',
        to: email,
        subject: 'Asunto del correo',
        html: contentHtmml,
    }

    transporter.sendMail(mailOptions, (error, info)=>{
        if(error)
        {
            console.log(error);
        }
        else{
            res.render('formulario_pago',{
                alert:true,
                alertTitle: "Compra exitosa",
                alertMessage: "Su compra se genero con exito dirijase a su correo para tener toda la información necesaria",
                alertIcon: 'success',
                ShowConfirmButton:false,
                timer: 1000,
                ruta:'/'
            })

            console.log('Email enviado: ' + info.response);
        }
    })
}