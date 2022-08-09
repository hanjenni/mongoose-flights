const Ticket = require('../models/ticket');
const Flight = require('../models/flight');


module.exports = {
    new: newTicket,
    create,
  
}




function create(req,res) {
    req.body.flight = req.params.id
    const ticket = new Ticket(req.body);
    ticket.save(function (err) {
        if (err) return res.render('tickets/new.ejs');
        res.redirect(`/flights/${ticket.flight}`);
});
}
   
function newTicket(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        res.render(`tickets/new.ejs`, {
            title: "New Ticket",
            flight
        });
    });
}

   
    

    
    
    
	
   


   
    

    
    
    
	