var express = require('express');
var router = express.Router()
var wardController = require('./wardController')

var bodyParser = require('body-parser')
router.use(bodyParser.json())

router.get('/', (req,res)=> {
    wardController.getAll().then((data) => {
        res.setHeader('Content-Type', 'application/json')
        res.status(data.status).send(data.wards);
    })
})

router.post('/', (req,res) => {
    wardController.insertWard(req.body).then((data) => {
        res.status(data.status).send(data.ward);
    })
})

router.put('/:id', (req,res) => {
    res.send(req.body);
})

router.delete('/:id', (req,res) => {

})

module.exports = router;