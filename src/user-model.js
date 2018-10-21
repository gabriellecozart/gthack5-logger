/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

/* Create user schema */
var userSchema = new Schema({
    userID: {
        type: Number,
        required: true 
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    treesPlanted: [{
        type: Number
    }]
});

userSchema.pre('save', function(next) {
    var currentTime = new Date;
    this.updated_at = currentTime;
    if(!this.created_at)
    {
        this.created_at = currentTime;
    }
    next();
    console.log("Orange!"); 
});

var User = mongoose.model('User', userSchema)

module.exports = User;