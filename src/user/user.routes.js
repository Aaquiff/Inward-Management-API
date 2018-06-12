var router = require('express')();
var controller = require('./user.controller');

router.get('/',(req,res)=>{
    controller.getAll().then((data)=>{
        console.log('user routes get');
        res.status(data.status).send(data.users);
    })
})

router.post('/',(req,res)=>{
    console.log(req.body);
    controller.authenticate(req.body).then((data)=>{
        res.status(data.status).send(data.user)
    })
})

module.exports = router;