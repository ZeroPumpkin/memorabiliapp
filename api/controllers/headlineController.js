'use strict';

exports.getHeadline = function(req, res) {
  var headline = require('../../headline');

  var headline_obj = headline.getHeadline(req.query.template);

  if (req.accepts('html')) {
    res.render('headline', {title: 'Breaking News', headline: headline_obj.headline, image: headline_obj.image_url});
  }
  else if (req.accept('json')) {
  	res.json(headline_obj);
  }
};

exports.getHelp = function(req, res) {
  var headline = require('../../headline');

  res.render('help', {title: 'Help', placeholder_docu: headline.getPlaceholderDocu(), example_template: headline.getExampleTemplate() });
}