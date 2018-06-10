var mongoose = require('../db//dbConfig');
var wardSchema = mongoose.model('Ward');
var bedSchema = mongoose.model('Bed');

function Controller() {

    this.insertWard = (data) => {
        return new Promise((resolve,reject) => {
            var ward = new wardSchema(data);
            ward.save().then(()=> {
                console.log('Ward inserted')
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
                wardNo: id
            }).exec().then((data) => {
                resolve({
                    status: 200,
                    ward: data
                })
            }).catch((err)=>{
                reject({
                    status: 404,
                    message: "Error:- Ward not found "
                })
            })
        })
    }

    this.updateWard = (data) => {
        return new Promise((resolve, reject)=>{
            wardSchema.update(
                {wardNo: data.id},data).then(()=> {
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
            wardSchema.deleteOne({wardNo: id}).then(()=> {
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

    this.getBedsForWard = (id) => {
        return new Promise((resolve, reject) => {
            bedSchema.find({
                wardNo: id
            }).exec().then((data) => {
                resolve({
                    status: 200,
                    beds: data
                })
            }).catch((err)=>{
                reject({
                    status: 404,
                    message: "Error:- Beds not found "
                })
            })
        })
    }

}

module.exports = new Controller();