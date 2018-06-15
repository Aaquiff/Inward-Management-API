var mongoose = require('../db/dbConfig');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

var PatientSchema = new Schema({
    patientId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: false
    },
    nic: {
        type: String,
        required: true
    }
})

mongoose.model('Patient', PatientSchema);

autoIncrement.initialize(mongoose.connection);
PatientSchema.plugin(autoIncrement.plugin, {model: 'Patient', field: 'patientId', startAt: 10003});

module.exports = mongoose;