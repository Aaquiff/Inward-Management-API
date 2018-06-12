var express = require('express')
var router = express()
var wardRoutes = require('./ward/ward.routes')
var bedRoutes = require('./bed/bed.routes')
var prescriptionRoutes = require('./prescription/prescription.routes')
var allergyRoutes = require('./allergy/allergyRoutes')

router.use('/wards',wardRoutes);
router.use('/beds',bedRoutes);
router.use('/prescription/', prescriptionRoutes)
router.use('/allergies', allergyRoutes)

router.get('/', (req,res) => {
    res.send('Inward');
})

module.exports = router;