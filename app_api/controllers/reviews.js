const express = require('express');
// const router  = express.Router();
var mongoose = require('mongoose'),
  Review = mongoose.model('Location');


module.exports = function(app){
	app.route('/:locationid/reviews/new').post(function(req, res){
		let query = {_id: req.params.locationid};

      Review.findOneAndUpdate(query, { $push: { reviews: req.body }}, (err, review) => {
        if(err) {
          res.json({success: false, msg: 'Failed to review'});
        } else {
          res.json({success: true, msg: 'Thank you for review'});
        }
      });
	});

	// MiddleWare for non existed routes
	app.use(function(req, res) {
	  res.status(404).send({url: req.originalUrl + ' not found'})
	});
};
