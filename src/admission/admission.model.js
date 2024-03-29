var mongoose = require('../db/dbConfig');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

var AdmissionSchema = new Schema({
    admissionId: {
        type: Number,
        require: true
    },
    bhtNo: {
        type: String,
        require: true
    },
    patientId: {
        type: String,
        require: true
    },
    bedNo: {
        type: String,
        require: true
    },
    wardNo: {
        type: String,
        require: true
    },
    dailyNo: {
        type: String,
        require: true
    },
    monthlyNo: {
        type: String,
        require: true
    },
    yearlyNo: {
        type: String,
        require: true
    },
    doctorId: {
        type: String,
        required: true
    },
    admittedDate: {
        type: Date,
        default: Date.now
    },
    active: {
        type: Boolean,
        default: true
    }
});

AdmissionSchema.virtual('doctor', {
    ref: 'Doctor',
    localField: 'doctorId',
    foreignField: 'doctorId',
    justOne: true
});

AdmissionSchema.virtual('patient', {
    ref: 'Patient',
    localField: 'patientId',
    foreignField: 'patientId',
    justOne: true
});

AdmissionSchema.set('toObject', {virtuals: true});
AdmissionSchema.set('toJSON', {virtuals: true});

mongoose.model('Admission', AdmissionSchema);

autoIncrement.initialize(mongoose.connection);
AdmissionSchema.plugin(autoIncrement.plugin, {model: 'Admission', field: 'admissionId', startAt: 100000});

module.exports = mongoose;