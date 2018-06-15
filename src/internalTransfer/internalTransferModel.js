var mongoose = require('../db//dbConfig');
var autoIncrement = require('mongoose-auto-increment');

var InternalTransferSchema = new mongoose.Schema({
    transferId:{ type: String, require: true},
    transferWard:{ type: String, require: true},
    transferReport:{ type: String, require: true},
    transferReason:{ type: String, require: true},
    treatment:{ type: String, require: true},
    transferDate:{ type: String, require: true},
    remarks:{ type: String, require: true}
});

mongoose.model('InternalTransfer', InternalTransferSchema);

autoIncrement.initialize(mongoose.connection);
InternalTransferSchema.plugin(autoIncrement.plugin, {model: 'InternalTransfer', field: 'transferId', startAt: 1000});

module.exports = mongoose;