var mongoose =  require('mongoose')
var Schema = mongoose.Schema;

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

mongoose.model('Ward', WardSchema);
mongoose.model('Bed', BedSchema);

mongoose.connect('mongodb+srv://root:root@cluster0-uemqc.mongodb.net/test?retryWrites=true',(err) => {
    if (err) {
        console.log('Failed to connect to database');
        process.exit(-1);
    }
    else {
        console.log('Connected to database');
    }
})

module.exports = mongoose;