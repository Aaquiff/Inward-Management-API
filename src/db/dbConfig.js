var mongoose =  require('mongoose')
var prescriptionSchema = require('./prescriptionSchema')
var autoIncrement = require('mongoose-auto-increment');

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