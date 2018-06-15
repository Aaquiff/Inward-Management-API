var express = require('express');
var router = express();
var wardRoutes = require('./ward/ward.routes');
var bedRoutes = require('./bed/bed.routes');
var prescriptionRoutes = require('./prescription/prescription.routes');
var allergyRoutes = require('./allergy/allergyRoutes');
var admissionRoutes = require('./admission/admission.routes');
var dischargeRoutes = require('./discharge/discharge.routes');
var patientRoutes = require('./patient/patient.routes');
var doctorRoutes = require('./doctor/doctor.routes');
var intTransferRoutes = require('./internalTransfer/internalTransferRoutes')

router.use('/wards',wardRoutes);
router.use('/beds',bedRoutes);
router.use('/prescriptions', prescriptionRoutes);
router.use('/allergies', allergyRoutes);
router.use('/admissions', admissionRoutes);
router.use('/discharges', dischargeRoutes);
router.use('/patients', patientRoutes);
router.use('/doctors', doctorRoutes);
router.use('/inttransfers', intTransferRoutes);


router.get('/', (req,res) => {
    res.send('Inward');
});

module.exports = router;