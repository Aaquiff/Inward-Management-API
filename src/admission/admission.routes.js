var express = require('express');
var router = express.Router();

var AdmissionController = require('./admission.controller');

var bodyParser = require('body-parser');
router.use(bodyParser.json());

router.get('/', (req,res)=> {
    AdmissionController.getAll().then((data) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(data.status).send(JSON.stringify(data.admissions));
    })
})

router.get('/:id', (req,res)=> {
    AdmissionController.get(req.params.id).then((data) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(data.status).send(data.admissions);
    })
})

router.post('/', (req,res) => {
    AdmissionController.insert(req.body).then((data) => {
        res.status(data.status).send(data.message);
    })
})

router.put('/:id', (req,res) => {
    AdmissionController.update(req.body).then((data) => {
        res.status(data.status).send(data.message);
    })
})

router.delete('/:id', (req,res) => {
    AdmissionController.delete(req.params.id).then((data) => {
        res.status(data.status).send(data.message);
    })
})

module.exports = router;