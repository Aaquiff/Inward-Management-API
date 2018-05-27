var express =require('express');
var router = express.Router();
var controller = require('./allergyController');

var bodyParser = require('body-parser')
router.use(bodyParser.json())

router.get('/:id', function(req, res){
    controller.getAll(req.params.id).then(function(data){
        res.status(data.status).send({
            data: data.data
        })
    }).catch(function(err){
        res.status(err.status).send({
            message: err.message
        })
    })
})

router.post('/:id', function(req, res){
    console.log('PUT /allergies/' + req.params.id + ' body: ' + JSON.stringify(req.body));
    controller.add(req.params.id, req.body).then(function(data){
        res.status(data.status).send({
            message: data.message
        })
    }).catch(function(err){
        res.status(err.status).send({
            message: err.message
        })
    })
})

router.put('/:id', function(req, res){
    controller.update(req.body).then(function(data){
        res.status(data.status).send({
            message: data.message
        })
    }).catch(function(err){
        res.status(err.status).send({
            message: err.message
        })
    })
})

module.exports = router;