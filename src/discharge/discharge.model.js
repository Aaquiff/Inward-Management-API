var mongoose = require('../db/dbConfig');
var Schema = mongoose.Schema;

var DischargeSchema = new Schema({
    patientId: {
        type: String,
        required: true
    },
    doctorId: {
        type: String,
        required: true
    },
    dischargeType: {
        type: String,
        require: true
    },
    dischargeDate: {
        type: Date,
        require: true
    },
    remark: {
        type: String,
        require: false
    },
    refered: {
        type: String,
        require: false
    },
    outcome: {
        type: String,
        require: false
    },
    diagnosis: {
        type: String,
        require: false
    },
    elmmr: {
        type: String,
        require: false
    },
    icdCode: {
        type: String,
        require: false
    }
})

mongoose.model('Discharge', DischargeSchema);

module.exports = mongoose;