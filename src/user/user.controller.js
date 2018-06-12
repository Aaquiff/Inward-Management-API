var UserSchema = require('./user.model').model('User');

function Controller() {

    this.login = (user) => {
        let {username, password} = user;
        return new Promise((resolve,reject)=> {
            UserSchema.findOne({
                username: user.username
            }).exec().then((data) => {
                if(data.password == password)
                    resolve({status: 200, message: "logged in", user: data})
                else
                    resolve({status: 401, message: "incorrect password"})
            }).catch((err)=> {
                reject({
                    status: 500,
                    message: "Error "  + err
                })
            })

        })
    };

    this.signup = (user) => {
        let {username, password} = user;

        return new Promise((resolve,reject)=> {
            let userData = {
                username: username,
                password: password
            };
            let newUser = new UserSchema(userData);
            newUser.save().then(()=> {
                resolve({status: 201, message: 'signup successful'});
            }).catch((err)=>{
                console.log(JSON.stringify(error, null, 2)); // you might want to do this to examine and trace where the problem is emanating from
                reject({status:500, message: 'error signing up user'})
            })

        })
    };

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

}

module.exports = new Controller();