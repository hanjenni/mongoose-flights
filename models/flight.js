const mongoose = require('mongoose')

const destinationSchema = new mongoose.Schema({
    airport: {
        type: String, 
        enum: ['ATL', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN'},       
    arrival: {
        type: Date,
        default: Date.now()
    }  
});


const flightSchema = new mongoose.Schema({
    airline: String,
    airport: String,
    flightNo: Number,
    departs: Date,
    destinations: [destinationSchema]
     
   
});

module.exports = mongoose.model('Flight',flightSchema);