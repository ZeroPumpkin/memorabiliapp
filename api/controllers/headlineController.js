'use strict';

exports.getHeadline = function(req, res) {
  var headline = require('../../headline');

  res.send(headline.getHeadline());
};
