var mongoose = require('./bed.model');
var bedSchema = mongoose.model('Bed');

function Controller() {

    this.insert = (data) => {
        return new Promise((resolve,reject) => {
            var bed = new bedSchema(data);
            bed
            bed.save().then(()=> {
                console.log('Bed inserted')
                resolve({
                    status: 200,
                    message: "Bed inserted"
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
            bedSchema.find().exec().then((data) => {
                resolve({
                    status: 200,
                    beds: data
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
            bedSchema.find({
                bedNo: id
            }).exec().then((data) => {
                resolve({
                    status: 200,
                    bed: data
                })
            }).catch((err)=>{
                reject({
                    status: 404,
                    message: "Error:- Bed not found "
                })
            })
        })
    }

    this.update = (data) => {
        return new Promise((resolve, reject)=>{
            bedSchema.update(
                {bedNo: data.bedNo},data).then(()=> {
                    resolve({
                        status: 200,
                        message: "Bed Updated Successfully"
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
            bedSchema.deleteOne({bedNo: id}).then(()=> {
                resolve({
                    status: 200,
                    message: "Bed deleted"
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