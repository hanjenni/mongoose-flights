const Ticket = require('../models/ticket');
const Flight = require('../models/flight');


module.exports = {
    new: newTicket,
    create,
  
    
    
  
}


function create(req, res){
    req.body.flight = req.params.id
    console.log(create, '<-new ticket button')
    Ticket.create(req.body, function(err, ticket){
        if(err) {
            console.log('error')
        }
      
        res.redirect(`/flights/${req.params.id}`)
    });
};

   
function newTicket(req, res) {
    console.log(newTicket, '<-pressed buy new ticket')
    Flight.findById(req.params.id, function(err, flight) {
        res.render(`tickets/new.ejs`, {
            flight
        });
    });
}


    
    
	
   


   
    

    
    
    
	