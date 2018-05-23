var express = require('express')
var router = express()
var wardRoutes = require('./ward/wardRoutes')

router.use('/wards',wardRoutes);

router.get('/', (req,res) => {
    res.send('Inward');
})

module.exports = router;