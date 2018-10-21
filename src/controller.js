var mongoose = require('mongoose'),
dbs = require('./dbs'),
Listing = require('./listing-model.js');
User = require('./user-model.js');

mongoose.connect(dbs.db.uri);

module.exports = {};

/* Add a tree */
module.exports.addTree = function (req, res) {
    var newListing = new Listing(req.body);
    newListing.save(function(err){
        if (err) {
            console.log(err);
            res.status(500).send("Error uploading your tree!");
        } else {
            res.status(200).send(newListing);
        }
    });
}

/* Return an array of all trees */
module.exports.getTrees = function (req, res) {
    Listing.find({}, 'treeName treeType coordinates created_at', function(err, trees) {
        
        if (err) {
            console.log(err);
            res.status(500).send("Error retrieving your trees!")
        } else {
            console.log(trees);
            res.status(200).send(trees);
        }
    });
}

/* Add a user */
module.exports.addUser = function (req, res) {
    var newUser = new User(req.body);
    newUser.save(function(err) {
        if (err) {
            console.log(err);
            res.status(500).send("Error uploading your user!");
        } else {
            res.status(200).send(newUser);
        }
    });
}

/* Authenticate a user given username and password */
module.exports.authenticate = function (req, res) {
    User.find({ userName: req.body.userName, password: req.body.password}, function(err, docs){
        if (err) {
            console.log(err);
            res.status(401).send("Incorrect username or password.");
        } else {
            res.status(200).send("Success! Logging in.");
        }
    });
}
