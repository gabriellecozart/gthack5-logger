var path = require('path'),
express = require('express'),
bodyParser = require('body-parser');

/* Require our API controller */
var controller = require('./controller');

/* Start our Express web server*/
var app = express();

//some nerd stuff that sets your server port and lets you read POST requests with a JSON payload
app.set('port', process.env.PORT || 8080);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//lets us access the files in our `public` folder, so going to http://yourwebsite.com/ will open index.html, located in the `public` folder
app.use(express.static(path.join(__dirname, 'public')));

//add the tree!
app.post('/api/add/tree', controller.addTree);

//add the user!
app.post('/api/add/user', controller.addUser);

app.get('/api/getTrees', controller.getTrees);

app.post('/api/authenticate', controller.authenticate);


//starts the app on the port we defined earlier
//kill the app with ctrl-c in the terminal
//to actually run the app tho, run `node index.js`
app.listen(app.get('port'), function() {
	console.log('App is running at http://localhost:%d', app.get('port')); 
	console.log('  Press CTRL-C to stop\n');
});

module.exports = app;