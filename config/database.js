const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/flights');

mongoose.connection.on('connected', function(){
    console.log('connected to mongodb at 27017')
})