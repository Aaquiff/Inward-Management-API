var mongoose =  require('mongoose')
var schema = mongoose.Schema;

var WardSchema = new schema({
    id: { type: String, require: true },
    name: { type: String, require: false }
})

mongoose.model('Ward', WardSchema);

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