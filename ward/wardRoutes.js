var express = require('express');
var router = express.Router()
var wardController = require('./wardController')

var bodyParser = require('body-parser')
router.use(bodyParser.json())

router.get('/', (req,res)=> {
    console.log('GET /wards');
    wardController.getAll().then((data) => {
        res.setHeader('Content-Type', 'application/json')
        res.status(data.status).send(JSON.stringify(data.wards));
    })
})

router.get('/:id', (req,res)=> {
    console.log('GET /wards/'+req.params.id);
    wardController.getWard(req.params.id).then((data) => {
        console.log(JSON.stringify(data.ward));
        res.setHeader('Content-Type', 'application/json')
        res.status(data.status).send(data.ward);
    })
})

router.post('/', (req,res) => {
    console.log('POST /wards body: ' + JSON.stringify(req.body));
    wardController.insertWard(req.body).then((data) => {
        res.status(data.status).send(data.message);
    })
})

router.put('/:id', (req,res) => {
    console.log('PUT /wards/' + req.params.id + ' body: ' + JSON.stringify(req.body));
    wardController.updateWard(req.body).then((data) => {
        res.status(data.status).send(data.ward);
    })
})

router.delete('/:id', (req,res) => {
    console.log('DELETE /wards/'+req.params.id);
    wardController.deleteWard(req.params.id).then((data) => {
        res.status(data.status).send(data.message);
    })
})

module.exports = router;