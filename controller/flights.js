const Flight = require('../models/flight')

module.exports = {
    new: newFlight,
    create
}

function newFlight(req, res){
    res.render('flights/new.ejs')
}

function create(req, res){
    // req.body.cast = req.body.cast.replace(/\s*,\s*/g, ',');
  // split if it's not an empty string
  if (req.body.cast) req.body.cast = req.body.cast.split(',');
  const flight = new Flight(req.body);
  flight.save(function(err) {
    // one way to handle errors
    if (err) return res.render('flights/new');
    console.log(flight);
    // for now, redirect right back to new.ejs
    res.redirect('/flights/new');
  });
}