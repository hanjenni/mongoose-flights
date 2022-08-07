const mongoose = require('mongoose')

const destinationSchema = new mongoose.Schema({
    airport: String,             
    arrival:  Date,
});


const flightSchema = new mongoose.Schema({
    airline: String,
    airport: String,
    flightNo: 
        { type: Number, 
            min: 10, 
            max: 9999,
            required: true}, 
    departs: 
        { type: Date, 
            default: () => Date.now() + 7*24*60*60*1000,
            required: true},
    destinations: [destinationSchema]
     
   
});

module.exports = mongoose.model('Flight',flightSchema);