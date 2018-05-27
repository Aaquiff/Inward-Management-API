var mongoose =  require('mongoose')
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

var WardSchema = new Schema({
    wardNo: { type: String, require: true },
    wardCategory: { type: String, require: false },
    wardType: { type: String, require: false }
})

var BedSchema = new Schema({
    bedNo: { type: String, require: true },
    bedType: { type: String, require: false },
    bhtNo: { type: String, require: false },
    patientId: { type: String, require: false },
    availability: { type: String, require: false },
    wardNo: { type: String, require: false }
})

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
})

mongoose.model('Ward', WardSchema);
mongoose.model('Bed', BedSchema);
mongoose.model('Allergy', AllergySchema);

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
BedSchema.plugin(autoIncrement.plugin, {model: 'Bed', field: 'bedNo'})


module.exports = mongoose;