var mongoose = require('./patient.model');
var PatientSchema = mongoose.model('Patient');


function Controller() {

    this.insert = (data) => {
        return new Promise((resolve,reject) => {
            var patient = new PatientSchema(data);
            patient.save().then(()=> {
                resolve({
                    status: 200,
                    message: "Patient inserted"
                })
            }).catch((err)=> {
                reject( {
                    status: 500,
                    message: err
                })
            })
        })
    };

    this.getAll = () => {
        return new Promise((resolve,reject)=> {
            PatientSchema.find().exec().then((data) => {
                resolve({
                    status: 200,
                    patients: data
                })
            }).catch((err)=> {
                reject({
                    status: 500,
                    message: "Error "  + err
                })
            })

        })
    };

    this.get = (patientId) => {
        return new Promise((resolve, reject) => {
            PatientSchema.find({
                patientId: patientId
            }).exec().then((data) => {
                resolve({
                    status: 200,
                    patient: data
                })
            }).catch((err)=>{
                reject({
                    status: 404,
                    message: "Error:- Patient not found "
                })
            })
        })
    }

}

module.exports = new Controller();
