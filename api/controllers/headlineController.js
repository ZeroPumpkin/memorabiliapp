'use strict';

exports.getHeadline = function(req, res) {
  var headline = require('../../headline');

  var headline_obj = headline.getHeadline();

  if (req.accepts('html')) {
    res.render('headline', {title: 'Breaking News', headline: headline_obj.headline, image: headline_obj.image_url});
  }
  else if (req.accept('json')) {
  	res.json(headline_obj);
  }
};
