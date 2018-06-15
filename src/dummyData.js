var AdmissionController = require('./admission/admission.controller');
var DoctorController = require('./doctor/doctor.controller');
var PatientController = require('./patient/patient.controller');

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


var doctors = [
    {
        id: "1000",
        name: "Tharushan Rathnaweera"
    },
    {
        id: "1001",
        name: "Aaquiff Rauff"
    },
    {
        id: "1002",
        name: "Lakshan Thilakarathne"
    },
    {
        id: "1003",
        name: "Bhanuka Hingalagoda"
    }
]

exports.insertDoctorData = () => {
    for(var i=0; i<doctors.length; i++) {
        DoctorController.insert(doctors[i]).then((data) => {
            console.log(data);
        })
    }
}

exports.insertAdmissionData = () => {
    AdmissionController.insert(newAdmission).then((data) => {
        console.log(data);
    })
}
