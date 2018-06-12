var mongoose = require('../db//dbConfig');
var autoIncrement = require('mongoose-auto-increment');

var BedSchema = new mongoose.Schema({
    bedNo: { type: String, require: true },
    bedType: { type: String, require: false },
    bhtNo: { type: String, require: false },
    patientId: { type: String, require: false },
    availability: { type: String, require: false },
    wardNo: { type: String, require: false }
})

mongoose.model('Bed', BedSchema);

autoIncrement.initialize(mongoose.connection);
BedSchema.plugin(autoIncrement.plugin, {model: 'Bed', field: 'bedNo'});

module.exports = mongoose;