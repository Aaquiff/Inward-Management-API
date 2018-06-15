var mongoose = require('../db//dbConfig');
var autoIncrement = require('mongoose-auto-increment');

var AllergySchema = new mongoose.Schema({
    allergyId:{ type: String, require: true},
    patientId:{ type: String, require: true},
    allergyName:{ type: String, require: true},
    allergyStatus:{ type: String, require: true},
    allergyRemarks:{ type: String, require: true},
    allergyCategory:{ type: String, require: true},
    allergySeverity:{ type: String, require: true}
});

mongoose.model('Allergy', AllergySchema);

autoIncrement.initialize(mongoose.connection);
AllergySchema.plugin(autoIncrement.plugin, {model: 'Allergy', field: 'allergyId', startAt: 1000});

module.exports = mongoose;