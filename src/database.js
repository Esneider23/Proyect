const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Admin:Admin@cluster0.ncv7l.mongodb.net/proyecto?retryWrites=true&w=majority')
.then(db=>console.log("DB is connected"))
.catch(error=>console.log(error))