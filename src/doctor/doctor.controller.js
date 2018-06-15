var mongoose = require('./doctor.model');
var DoctorSchema = mongoose.model('Doctor');


function Controller() {

    this.insert = (data) => {
        return new Promise((resolve,reject) => {
            var doctor = new DoctorSchema(data);
            doctor.save().then(()=> {
                resolve({
                    status: 200,
                    message: "Doctor inserted"
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
            DoctorSchema.find().exec().then((data) => {
                resolve({
                    status: 200,
                    doctors: data
                })
            }).catch((err)=> {
                reject({
                    status: 500,
                    message: "Error "  + err
                })
            })

        })
    };

    this.get = (doctorId) => {
        return new Promise((resolve, reject) => {
            DoctorSchema.find({
                doctorId: doctorId
            }).exec().then((data) => {
                resolve({
                    status: 200,
                    doctor: data
                })
            }).catch((err)=>{
                reject({
                    status: 404,
                    message: "Error:- Doctor not found "
                })
            })
        })
    }

}

module.exports = new Controller();
