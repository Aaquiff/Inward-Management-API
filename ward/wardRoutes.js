var express = require('express');
var router = express.Router()
var wardController = require('./wardController')

var bodyParser = require('body-parser')
router.use(bodyParser.json())

router.get('/', (req,res)=> {
    wardController.getAll().then((data) => {
        res.setHeader('Content-Type', 'application/json')
        //res.header('Access-Control-Allow-Origin', '*')
        res.status(data.status).send(JSON.stringify(data.wards));
    })
})

router.get('/:id', (req,res)=> {
    wardController.getWard(req.params.id).then((data) => {
        res.setHeader('Content-Type', 'application/json')
        //res.header('Access-Control-Allow-Origin', '*')
        res.status(data.status).send(data.ward);
    })
})

router.post('/', (req,res) => {
    console.log('Post request with body : ' + JSON.stringify(req.body));

    wardController.insertWard(req.body).then((data) => {
        //res.header('Access-Control-Allow-Origin', '*')
        res.status(data.status).send(data.message);
    })
})

router.put('/:id', (req,res) => {
    wardController.updateWard(req.body).then((data) => {
        //res.header('Access-Control-Allow-Origin', '*')
        res.status(data.status).send(data.ward);
    })
})

router.delete('/:id', (req,res) => {
    wardController.deleteWard(req.params.id).then((data) => {
        //res.header('Access-Control-Allow-Origin', '*')
        res.status(data.status).send(data.message);
    })
})

module.exports = router;