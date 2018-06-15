var express =require('express');
var router = express.Router();
var controller = require('./internalTransferController');

var bodyParser = require('body-parser')
router.use(bodyParser.json())

router.post('/:id', function(req, res){
    console.log('TRANSFER ADD '+req.params.id);
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

router.get('/', (req,res)=> {
    console.log('GET transfer ');
    controller.getAll().then((data) => {
        res.setHeader('Content-Type', 'application/json')
        res.status(data.status).send(JSON.stringify(data.hist));
    })
})

module.exports = router;