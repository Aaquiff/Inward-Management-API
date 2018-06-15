var mongoose = require('./allergyModel');
var allergyShema = mongoose.model('Allergy');

function Controller(){
    this.getAll = function (patientId){
        return new Promise(function (resolve, reject){
            allergyShema.find({patientId: patientId}).exec().then(function(data){
                resolve({
                    status: 200,
                    data: data
                });
            }).catch(function(err){
                reject({
                    status: 500,
                    message: "Error " + err
                })
            })
        })
    }

    this.getOne = function (patientId, allergyId){
        return new Promise(function (resolve, reject){
            allergyShema.find({patientId: patientId, allergyId: allergyId}).exec().then(function(data){
                resolve({
                    status: 200,
                    data: data
                });
            }).catch(function(err){
                reject({
                    status: 500,
                    message: "Error " + err
                })
            })
        })
    }

    this.add = function(patientId, data){
        return new Promise(function(resolve, reject){
            allergy = new allergyShema({
                patientId: patientId,
                allergyName: data.allergyName,
                allergyStatus: data.allergyStatus,
                allergyRemarks: data.allergyRemarks,
                allergyCreateDate: data.allergyCreateDate,
                allergyCreateUser: data.allergyCreateUser,
                allergyLastupdateDate: data.allergyLastupdateDate,
                allergyLastupdateUser: data.allergyLastupdateUser,
                allergyActive: data.allergyActive
            });

            allergy.save().then(function(){
                resolve({
                    status: 200,
                    message: "Success!"
                })
            }).catch(function(err){
                reject({
                    status: 500,
                    message: "Error " + err
                })
            })
        })
    }

    this.update = function(data){
        return new Promise(function(resolve, reject){
            allergyShema.update({allergyId: data.allergyId}, data).exec().then(function(){
                resolve({
                    status: 200,
                    message: "Success"
                })
            }).catch(function(err){
                reject({
                    status: 500,
                    message: "Error " + err
                })
            })
        })
    }
}

module.exports = new Controller();