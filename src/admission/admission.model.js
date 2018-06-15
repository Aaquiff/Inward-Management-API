var mongoose = require('../db/dbConfig');
var Schema = mongoose.Schema;

var AdmissionSchema = new Schema({
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
    }
})

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

AdmissionSchema.set('toObject', {virtuals: true})
AdmissionSchema.set('toJSON', {virtuals: true})

mongoose.model('Admission', AdmissionSchema);

module.exports = mongoose;