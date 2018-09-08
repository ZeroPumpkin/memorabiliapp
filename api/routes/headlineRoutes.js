'use strict';
module.exports = function(app) {
  var headline = require('../controllers/headlineController');

  app.route('/headline')
    .get(headline.getHeadline);
};