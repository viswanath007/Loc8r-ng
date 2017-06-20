var express = require('express');
var router = express.Router();
var ctrlLocations   = require('../controllers/locations');
// var ctrlOthers    = require('../controllers/others');

// Define locations routes and mapping them to controllers functions
/* GET home page. */
router.get('/', ctrlLocations.homeList);

/* Get 'Location Info' page */
router.get('/locations/:location._id', ctrlLocations.locationInfo);

/* Get 'Add Review' page */
router.get('/:locationid/review/new', ctrlLocations.addReview);

/* Post to API page */
router.post('/:locationid/review/new', ctrlLocations.doAddReview);


// Define others routes and mapping them to controllers functions
/* Get 'About' page */
// router.get('/about', ctrlOthers.about);

module.exports = router;