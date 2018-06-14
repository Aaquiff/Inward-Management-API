var AdmissionController = require('./admission/admission.controller');

var newAdmission = {
    bhtNo : "2018.05",
    patientId : "10",
    bedNo : "10",
    wardNo : "10",
    dailyNo : "4",
    monthlyNo : "6",
    yearlyNo : "2019",
    doctorId : "2"
}


exports.insertAdmissionData = () => {
    AdmissionController.insert(newAdmission).then((data) => {
        console.log(data);
    })
}
