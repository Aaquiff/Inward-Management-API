var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var PrescriptionSchema = new Schema({
    bhtNo: {
        type: String,
        require: true
    },
    prescription_id: {
        type: Number,
        require: true
    },
    start_date: {
        type: Date,
        default: Date.now
    },
    end_date: {
        type: Date,
        default: Date.now
    },
    prescribed_by: {
        type: String,
        require: true
    }
})

module.exports = PrescriptionSchema;