var mongoose = require('./prescription.model');
//var PrescriptionSchema 	= mongoose.model('Prescription');

var prescriptionController = function() {
    this.searchAllPrescribedDrugs = (bht, patientId) => {
        // return new Promise((resolve, reject) => {
        //     // UserSchema.find({_id:id}).exec().then(user => {
        //     //     resolve({status: 200, data: user});
        //     // }).catch(err => {
        //     //     reject({status: 500, message: "Error:- " + err});
        //     // })
        // })
    }

    this.getAllPrescriptions = (bht, patientId) => {
        // return new Promise((resolve, reject) => {
        //     // UserSchema.find({_id:id}).exec().then(user => {
        //     //     resolve({status: 200, data: user});
        //     // }).catch(err => {
        //     //     reject({status: 500, message: "Error:- " + err});
        //     // })
        // })
    }
}

module.exports = new prescriptionController()