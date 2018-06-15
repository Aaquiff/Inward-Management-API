var mongoose = require('../db/dbConfig');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

var DoctorSchema = new Schema({
    doctorId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
})

mongoose.model('Doctor', DoctorSchema);

autoIncrement.initialize(mongoose.connection);
DoctorSchema.plugin(autoIncrement.plugin, {model: 'Doctor', field: 'doctorId', startAt: 1000});


module.exports = mongoose;