'use strict'

var router = require('express')();
var controller = require('./user.controller');
var jwt = require('jsonwebtoken');
var config = require('../config');

router.get('/',(req,res)=>{
    controller.getAll().then((data)=>{
        res.status(data.status).send(data.users);
    })
})

router.post('/signup',(req,res)=>{
    controller.signup(req.body).then((data)=>{
        res.status(data.status).send(data)
    })
})

router.post('/login',(req,res)=>{
    controller.login(req.body).then((data)=>{
        res.status(data.status).send(data)
    })
})

router.all('/logout', (req, res) => {
    res.status(200).send({ auth: false, token: null });
})

router.use((req, res, next) => {
    var token = req.headers['x-access-token'];
    if(!token) return res.status(401).send({
        auth: false,
        message: 'No token provided'
    });
    jwt.verify(token, config.secret, (err, decoded)=>{
        if(err) return res.status(500)
            .send({auth: false, message: 'Failed to authenticate token'});
        next();
    })
});

module.exports = router;