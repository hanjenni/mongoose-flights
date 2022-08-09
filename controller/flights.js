const Flight = require('../models/flight')
const Ticket= require('../models/ticket')

module.exports = {
    new: newFlight,
    create,
    index,
	show,
}

function show(req, res) {
	Flight.findById(req.params.id, function(err, flight) {
		Ticket.find({flight: flight._id}, function(err, tickets){
			res.render('flights/show.ejs', {flight, tickets});	
		})
		console.log(flight)
		
	})
}

function newFlight(req, res){
	res.render('flights/new.ejs')
}

function create(req, res){
	// log out what the function needs
	console.log(req.body)
	// take teh contents of the form (req.body), and add it to our database
	Flight.create(req.body, function(err, flightDoc){
		if(err){
			console.log(err, ' <- err in the flights create controller')
			return res.render('flights/new.ejs')
		}
		console.log(flightDoc)
		res.redirect('/flights')
	})
	
}

function index(req, res){
    //List out the flights
    Flight.find({},function(err, allFlights){
    console.log(allFlights)    
    res.render('flights/index.ejs',{
        flights: allFlights
    });
});
    
}






