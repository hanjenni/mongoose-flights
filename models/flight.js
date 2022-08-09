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
            max: 9999,}, 
    departs: 
        { type: Date, 
            default: () => Date.now() + 7*24*60*60*1000},
    destinations: [destinationSchema],
    flight: [{type: mongoose.Schema.Types.ObjectId, ref: 'Flight'}]
     
   
});

module.exports = mongoose.model('Flight',flightSchema);