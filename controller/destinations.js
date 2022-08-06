const Flight = require("../models/flight");

module.exports = {
    create,
};

function create(req, res) {
    Flight.findById(req.params.id, function(err, flights) {
        flights.destinations.push(req.body);
        flights.save(function(err) {
            res.redirect('/flights/${req.params.id}');
        })
    })
}