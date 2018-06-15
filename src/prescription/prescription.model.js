var mongoose = require('../db/dbConfig');
var autoIncrement = require('mongoose-auto-increment');

var Schema = mongoose.Schema;

var DrugSchema = new Schema({
    drugName: {
        type: String,
        require: true
    },
    dosage: {
        type: Number,
        require: true
    },
    frequency: {
        type: String,
        require: true
    }
});

var PrescriptionSchema = new Schema({
    bhtNo: {
        type: String,
        require: true
    },
    patientId: {
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
    },
    drugs: {
        type: [DrugSchema],
        require: true
    }
});

mongoose.model('Prescription', PrescriptionSchema);

autoIncrement.initialize(mongoose.connection);

PrescriptionSchema.plugin(autoIncrement.plugin, {
    model: 'Prescription',
    field: 'prescription_id',
    startAt: 1000
})

module.exports = PrescriptionSchema;