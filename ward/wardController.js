var mongoose = require('../db//dbConfig');
var wardSchema = mongoose.model('Ward');
//var wards = '"wards": [ {"id":"1", "name": "Ward 1"} , {"id":"2", "name": "Ward 2"}, {"id":"3", "name": "Ward 3"} ]';
var wards = [
    {id: "1", name:"Ward 1"},
    {id: "2", name:"Ward 2"},
    {id: "3", name:"Ward 3"}
]

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

    this.updateWard = (data) => {
        return new Promise((resolve,reject) => {
        })
    }

    this.deleteWard = (id) => {
        console.log(id);
        return new Promise((resolve,reject) => {
            wardSchema.remove({id: id}).then((data)=>{
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