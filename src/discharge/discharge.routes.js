var express = require('express');
var router = express.Router();

var DischargeController = require('./discharge.controller');
var AdmissionController = require('../admission/admission.controller');

var bodyParser = require('body-parser');
router.use(bodyParser.json());

router.get('/', (req,res)=> {
    DischargeController.getAll().then((data) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(data.status).send(JSON.stringify(data.discharges));
    })
})

router.get('/:id', (req,res)=> {
    DischargeController.get(req.params.id).then((data) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(data.status).send(data.discharge);
    })
})

router.post('/', (req,res) => {
    console.log(req.body);
    DischargeController.insert(req.body).then((data) => {       
        AdmissionController.update({admissionId: req.body.admissionId, active: false}).then((res) => {
            res.status(res.status).send(res.message);
        }).catch((err) => {
            //res.status(err.status).send(err.message);
        })
        res.status(data.status).send(data.message);
    }).catch((err) => {
        res.status(err.status).send(err.message);
    })
})

router.put('/:id', (req,res) => {
    DischargeController.update(req.body).then((data) => {
        res.status(data.status).send(data.message);
    })
})

router.delete('/:id', (req,res) => {
    DischargeController.delete(req.params.id).then((data) => {
        res.status(data.status).send(data.message);
    })
})

module.exports = router;