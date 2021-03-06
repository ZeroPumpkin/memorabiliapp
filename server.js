var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000
  bodyParser = require('body-parser'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('views', './api/views');
app.set('view engine', 'pug');


var routes = require('./api/routes/headlineRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('memorabiliapp RESTful API server started on: ' + port);