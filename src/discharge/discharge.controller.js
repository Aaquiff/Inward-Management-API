var mongoose = require('./discharge.model');
var DischargeSchema = mongoose.model('Discharge');


function Controller() {

    this.insert = (data) => {
        return new Promise((resolve,reject) => {
            var discharge = new DischargeSchema(data);
            discharge.save().then(()=> {
                console.log('Discharge inserted')
                resolve({
                    status: 200,
                    message: "Discharge inserted"
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
            DischargeSchema.find().exec().then((data) => {
                resolve({
                    status: 200,
                    discharges: data
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
            DischargeSchema.find({
                id: id
            }).exec().then((data) => {
                resolve({
                    status: 200,
                    discharge: data
                })
            }).catch((err)=>{
                reject({
                    status: 404,
                    message: "Error:- Discharge not found "
                })
            })
        })
    }

    this.update = (data) => {
        return new Promise((resolve, reject)=>{
            DischargeSchema.update(
                {id: data.id},data).then(()=> {
                    resolve({
                        status: 200,
                        message: "Discharge Updated Successfully"
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
            DischargeSchema.deleteOne({id: id}).then(()=> {
                resolve({
                    status: 200,
                    message: "Discharge deleted"
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
