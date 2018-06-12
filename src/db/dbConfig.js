var mongoose =  require('mongoose')
var Schema = mongoose.Schema;
var prescriptionSchema = require('./prescriptionSchema')
var autoIncrement = require('mongoose-auto-increment');

var AllergySchema = new Schema({
    patientId:{ type: String, require: true},
    allergyName:{ type: String, require: true},
    allergyStatus:{ type: String, require: true},
    allergyRemarks:{ type: String, require: true},
    allergyCreateDate:{ type: String, require: true},
    allergyCreateUser:{ type: String, require: true},
    allergyLastupdateDate:{ type: String, require: true},
    allergyLastupdateUser:{ type: String, require: true},
    allergyActive:{ type: String, require: true}
});

mongoose.model('Allergy', AllergySchema);
mongoose.model('Prescription', prescriptionSchema);

mongoose.connect('mongodb+srv://root:root@cluster0-uemqc.mongodb.net/test?retryWrites=true',(err) => {
    if (err) {
        console.log('Failed to connect to database');
        process.exit(-1);
    }
    else {
        console.log('Connected to database');
    }
})

autoIncrement.initialize(mongoose.connection);

prescriptionSchema.plugin(autoIncrement.plugin, {
    model: 'Prescription',
    field: 'prescription_id',
    startAt: 1000
})

module.exports = mongoose;