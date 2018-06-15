var express = require('express');
var router = express.Router();

var DoctorController = require('./doctor.controller');

var bodyParser = require('body-parser');
router.use(bodyParser.json());

router.get('/', (req,res)=> {
    DoctorController.getAll().then((data) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(data.status).send(JSON.stringify(data.doctors));
    })
})

router.get('/:id', (req,res)=> {
    DoctorController.get(req.params.id).then((data) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(data.status).send(data.doctors);
    })
})

router.post('/', (req,res) => {
    DoctorController.insert(req.body).then((data) => {
        res.status(data.status).send(data.message);
    }).catch((err) => {
        res.status(err.status).send(err.message);
    })
})

module.exports = router;