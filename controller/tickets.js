const Ticket = require('../models/ticket');
const Flight = require('../models/flight');


module.exports = {
    new: newTicket,
    create,
  
    
    
  
}




// function create(req,res) {
//     console.log(create, '<-new ticket button')
//     req.body.flight = req.params.id
//     const ticket = new Ticket(req.body);
//     ticket.save(function (err) {
//         if (err) return res.render('tickets/new.ejs');
//         res.redirect(`/flights/${ticket.flight}`);


// });

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


    
    
	
   


   
    

    
    
    
	