var mongoose = require('./prescription.model');
var PrescriptionSchema 	= mongoose.model('Prescription');

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

    this.searchAll = (bht, patientId) => {
        return new Promise((resolve, reject) => {
            PrescriptionSchema.find({bhtNo:bht, patientId:patientId}).exec().then(prescriptions => {
                resolve({status: 200, data: prescriptions});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    this.insert = (data) => {
        return new Promise((resolve, reject) => {
            var prescription = new PrescriptionSchema(data);
            prescription.save().then(() => {
                console.log('Prescription inserted')
                resolve({
                    status: 200,
                    message: "Prescription inserted"
                })
            }).catch((err) => {
                reject({
                    status: 500,
                    message: err
                })
            })
        })
    };
}

module.exports = new prescriptionController()