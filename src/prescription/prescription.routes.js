var express = require('express');
var router = express.Router();
var prescriptionController = require('./prescription.controller');

router.get('/:bht/:patientId', (req, res) => {
    prescriptionController.searchAll(req.params.bht, req.params.patientId).then(data => {
        res.status(data.status).send({data: data.data});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    });
});

router.post('/', (req,res) => {
    prescriptionController.insert(req.body).then((data) => {
        res.status(data.status).send(data.message);
    }).catch((err) => {
        res.status(err.status).send(err.message);
    })
})

module.exports = router;