var mongoose = require('mongoose'),
dbs = require('./dbs'),
Listing = require('./listing-model.js');

mongoose.connect(dbs.db.uri);

module.exports = {};

module.exports.addTree = function (req, res) {
    var newListing = new Listing(req.body);
    newListing.save(function(err){
        if (err) {
            console.log("White!");
            console.log(err);
            res.status(500).send("Error uploading your tree!");
        } else {
            console.log("Blue!");
            res.status(200).send(newListing);
        }
    });
}
