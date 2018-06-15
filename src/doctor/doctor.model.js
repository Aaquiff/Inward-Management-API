var mongoose = require('../db/dbConfig');
var Schema = mongoose.Schema;

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

module.exports = mongoose;