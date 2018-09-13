'use strict';
module.exports = function(app) {
  var headline = require('../controllers/headlineController');

  app.route('/headline')
    .get(headline.getHeadline);

  app.route('/headline/help')
    .get(headline.getHelp);
};