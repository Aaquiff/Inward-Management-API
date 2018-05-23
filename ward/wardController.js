
//var wards = '"wards": [ {"id":"1", "name": "Ward 1"} , {"id":"2", "name": "Ward 2"}, {"id":"3", "name": "Ward 3"} ]';
var wards = [
    {id: "1", name:"Ward 1"},
    {id: "2", name:"Ward 2"},
    {id: "3", name:"Ward 3"}
]

function Controller() {
    this.getAll = () => {
        return new Promise((resolve,reject)=> {
            resolve({
                status: 200,
                wards: JSON.stringify(wards)
            })
        })
    };

    this.insertWard = (data) => {
        return new Promise((resolve,reject) => {
            wards.push(data);
            resolve({
                status: 200,
                ward: data
            })
        })
    }

    this.updateWard = (data) => {

    }

    this.deleteWard = (id) => {
        return new Promise((resolve,reject) => {

        })
    }

}

module.exports = new Controller();