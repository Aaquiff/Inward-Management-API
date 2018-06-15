var mongoose = require('./admission.model');
var AdmissionSchema = mongoose.model('Admission');


function Controller() {

    this.insert = (data) => {
        return new Promise((resolve,reject) => {
            var admission = new AdmissionSchema(data);
            admission.save().then(()=> {
                console.log('Admission inserted')
                resolve({
                    status: 200,
                    message: "Admission inserted"
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
            AdmissionSchema.find().populate('doctor').populate('patient').exec().then((data) => {
                resolve({
                    status: 200,
                    admissions: data
                })
            }).catch((err)=> {
                reject({
                    status: 500,
                    message: "Error "  + err
                })
            })

        })
    };

    this.get = (id) => {
        return new Promise((resolve, reject) => {
            AdmissionSchema.find({
                _id: id
            }).populate('doctor').populate('patient').exec().then((data) => {
                resolve({
                    status: 200,
                    admission: data
                })
            }).catch((err)=>{
                reject({
                    status: 404,
                    message: "Error:- Admission not found "
                })
            })
        })
    }

    this.update = (data) => {
        return new Promise((resolve, reject)=>{
            AdmissionSchema.update(
                {_id: data.id},data).then(()=> {
                    resolve({
                        status: 200,
                        message: "Admission Updated Successfully"
                    })
                }).catch((err)=>{
                    reject({
                        status: 500,
                        message: "Error:- " + err
                    })
                })
        })
    }

    this.delete = (id) => {
        return new Promise((resolve,reject) => {
            AdmissionSchema.deleteOne({_id: id}).then(()=> {
                resolve({
                    status: 200,
                    message: "Admission deleted"
                })
            }).catch((err)=> {
                reject({
                    status: 500,
                    message: err
                })
            })
        })
    }

}

module.exports = new Controller();
