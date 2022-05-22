const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/proyecto')
.then(db=>console.log("DB is connected"))
.catch(error=>console.log(error))