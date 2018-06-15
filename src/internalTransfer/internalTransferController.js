var mongoose = require('./internalTransferModel');
var transferShema = mongoose.model('InternalTransfer');

function Controller(){

    this.add = function(patientId, data){
        return new Promise(function(resolve, reject){
            transfer = new transferShema({
                patientId: patientId,
                transferWard: data.transferWard,
                transferReport: data.transferReport,
                transferReason: data.transferReason,
                treatment: data.treatment,
                remarks: data.remarks
            });

            transfer.save().then(function(){
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
}

module.exports = new Controller();