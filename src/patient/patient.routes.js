var express = require('express');
var router = express.Router();

var PatientController = require('./patient.controller');

var bodyParser = require('body-parser');
router.use(bodyParser.json());

router.get('/', (req,res)=> {
    PatientController.getAll().then((data) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(data.status).send(JSON.stringify(data.patients));
    })
})

router.get('/:id', (req,res)=> {
    PatientController.get(req.params.id).then((data) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(data.status).send(data.patients);
    })
})

router.post('/', (req,res) => {
    PatientController.insert(req.body).then((data) => {
        res.status(data.status).send(data.message);
    })
})

module.exports = router;