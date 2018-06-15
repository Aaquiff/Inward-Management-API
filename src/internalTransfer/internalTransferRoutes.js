var express =require('express');
var router = express.Router();
var controller = require('./internalTransferController');

var bodyParser = require('body-parser')
router.use(bodyParser.json())

router.post('/:id', function(req, res){
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

module.exports = router;