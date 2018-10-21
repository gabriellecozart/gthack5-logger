/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

/* Create tree schema */
var listingSchema = new Schema({
    treeID: {
        type: Number,
        required: true
    },
    treeName: {
        type: String
    },
    position: {
        type:[Number],
        required: true
    },
    treeType: {
        type: String
    },
    created_at: Date,
    updated_at: Date
});

/* Glorious meta deta! */
listingSchema.pre('save', function(next) {
  var currentTime = new Date;
  this.updated_at = currentTime;
  if(!this.created_at)
  {
    this.created_at = currentTime;
  }
  next();
  console.log("Orange!");
});

/* Use your schema to instantiate a Mongoose model */
var Listing = mongoose.model('Listing', listingSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Listing;