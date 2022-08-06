var express = require('express');
var router = express.Router();
const flightController = require('../controller/flights')

/* GET users listing. */
router.get('/',flightController.index);
router.get('/new', flightController.new);

router.get('/:id', flightController.show);
router.post('/',flightController.create);


module.exports = router;
