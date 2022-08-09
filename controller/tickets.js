const Ticket = require('../models/ticket');
const Flight = require('../models/flight');


module.exports = {
    new: newTicket,
    create,
    addToFlight
    
    
  
}

function addToFlight(req, res){
    Flight.findById(req.params.id, function(err, flightDoc){
        console.log(flight, '<--wheres the flight info?')
        flightDoc.flight.push(req.body);
        flightDoc.save(function(err){
            res.redirect(`/flights/${req.params.id}`);
        })
    })
}



function create(req,res) {
    console.log(create, '<-new ticket button')
    req.body.flight = req.params.id
    const ticket = new Ticket(req.body);
    ticket.save(function (err) {
        if (err) return res.render('tickets/new.ejs');
        res.redirect(`/flights/${ticket.flight}`);


});
}
   
function newTicket(req, res) {
    console.log(newTicket, '<-pressed buy new ticket')
    Flight.findById(req.params.id, function(err, flight) {
        res.render(`tickets/new.ejs`, {
            flight
        });
    });
}


    
    
	
   


   
    

    
    
    
	