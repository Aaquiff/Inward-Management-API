var mongoose = require('../db//dbConfig');

var WardSchema = new mongoose.Schema({
    wardNo: { type: String, require: true },
    wardCategory: { type: String, require: true },
    wardType: { type: String, require: true }
});

mongoose.model('Ward', WardSchema);

module.exports = mongoose;