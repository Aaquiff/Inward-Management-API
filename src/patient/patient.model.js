var mongoose = require('../db/dbConfig');
var Schema = mongoose.Schema;

var PatientSchema = new Schema({
    patientId: {
        type: Number,
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
        required: true
    },
    nic: {
        type: String,
        required: true
    }
})

mongoose.model('Patient', PatientSchema);

module.exports = mongoose;