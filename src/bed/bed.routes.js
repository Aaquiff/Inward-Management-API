var express = require('express');
var router = express.Router()
var controller = require('./bed.controller')

var bodyParser = require('body-parser')
router.use(bodyParser.json())

router.get('/', (req,res)=> {
    console.log('GET /beds');
    controller.getAll().then((data) => {
        res.setHeader('Content-Type', 'application/json')
        res.status(data.status).send(JSON.stringify(data.beds));
    })
})

router.get('/:id', (req,res)=> {
    console.log('GET /wards/'+req.params.id);
    controller.get(req.params.id).then((data) => {
        res.setHeader('Content-Type', 'application/json')
        res.status(data.status).send(data.bed);
    })
})

router.post('/', (req,res) => {
    console.log('POST /beds body: ' + JSON.stringify(req.body));
    controller.insert(req.body).then((data) => {
        res.status(data.status).send(data.message);
    })
})

router.put('/:id', (req,res) => {
    console.log('PUT /beds/' + req.params.id + ' body: ' + JSON.stringify(req.body));
    controller.update(req.body).then((data) => {
        res.status(data.status).send(data.message);
    })
})

router.delete('/:id', (req,res) => {
    console.log('DELETE /beds/'+req.params.id);
    controller.delete(req.params.id).then((data) => {
        res.status(data.status).send(data.message);
    })
})

module.exports = router;