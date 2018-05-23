var mongoose = require('../db//dbConfig');
var wardSchema = mongoose.model('Ward');

function Controller() {

    this.insertWard = (data) => {
        return new Promise((resolve,reject) => {
            var ward = new wardSchema(data);
            ward.save().then(()=> {
                resolve({
                    status: 200,
                    message: "Ward inserted"
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
            wardSchema.find().exec().then((data) => {
                resolve({
                    status: 200,
                    wards: data
                })
            }).catch((err)=> {
                reject({
                    status: 500,
                    message: "Error "  + err
                })
            })

        })
    };

    this.getWard = (id) => {
        return new Promise((resolve, reject) => {
            wardSchema.find({
                id: id
            }).exec().then((data) => {
                resolve({
                    status: 200,
                    ward: data
                })
            }).catch((err)=>{
                reject({
                    status: 404,
                    message: "Error:- User not found "
                })
            })
        })
    }

    this.updateWard = (data) => {
        return new Promise((resolve, reject)=>{
            wardSchema.update(
                {id: data.id},data).then(()=> {
                    resolve({
                        status: 200,
                        message: "Ward Updated Successfully"
                    })
                }).catch((err)=>{
                    reject({
                        status: 500,
                        message: "Error:- " + err
                    })
                })
        })
    }

    this.deleteWard = (id) => {
        return new Promise((resolve,reject) => {
            wardSchema.deleteOne({id: id}).then(()=> {
                resolve({
                    status: 200,
                    message: "Ward deleted"
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