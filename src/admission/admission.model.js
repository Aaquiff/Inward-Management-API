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

mongoose.model('Admission', AdmissionSchema);

module.exports = mongoose;