var express = require('express')
var router = express()
var wardRoutes = require('./ward/wardRoutes')

router.use(wardRoutes);

router.get('/', (req,res) => {
    res.send('Hello World');
})

module.exports = router;