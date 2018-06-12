var mongoose = require('../db/dbConfig');

var userSchema = mongoose.Schema({
    username: { type:String, require:true },
    password: { type:String, require:true }
});

mongoose.model('User', userSchema);

module.exports = mongoose;