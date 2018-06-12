var UserSchema = require('./user.model').model('User');

function Controller() {
    this.getAll = () => {
        return new Promise((resolve,reject)=> {
            UserSchema.find().exec().then((data) => {
                resolve({
                    status: 200,
                    users: data
                })
            }).catch((err)=> {
                reject({
                    status: 500,
                    message: "Error "  + err
                })
            })

        })
    };

    this.authenticate = (user) => {
        return new Promise((resolve,reject)=> {
            UserSchema.find({
                username: user.username,
                password: user.password
            }).exec().then((data) => {
                resolve({
                    status: 200,
                    user: data
                })
            }).catch((err)=> {
                reject({
                    status: 500,
                    message: "Error "  + err
                })
            })

        })
    }
}

module.exports = new Controller();