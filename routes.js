var express = require('express')
var router = express()
var wardRoutes = require('./ward/wardRoutes')
var bedRoutes = require('./bed/bedRoutes')

router.use('/wards',wardRoutes);
router.use('/beds',bedRoutes);

router.get('/', (req,res) => {
    res.send('Inward');
})

module.exports = router;