const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const session = require('express-session')
const RedisStore = require('connect-redis')(session)
const passport = require('passport')

const router = require('./src/routes.js')

const data = require('./src/dummyData')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())


app.use(session({
    secret: "\"iy98hcbh489n38984y4h498\"",
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())

app.get('/admissions',(req,res)=>{
    var admissions = [
        {BHTNo: 20181, PatientId: 1,
            PatientName: 'Mr.Ruwan Perera',
            WardNo: 1, BedNo: 1, Admitted: '2018-03-15',
            AdmittedTime: '09.00am'},
        {BHTNo: 20182, PatientId: 1,
            PatientName: 'Mr.Ruwan Perera',
            WardNo: 1, BedNo: 1, Admitted: '2018-03-15',
            AdmittedTime: '09.00am'}
    ]
    res.status(200).send(admissions);
});

app.get('/dummy', (req, res) => {
    data.insertAdmissionData();
    res.status(200).send("success");
})

app.use('/', require('./src/user/user.routes'))

app.use('/api', router)


app.listen('3000','localhost',(err)=>{
    if(err)
    {
        console.error(err);
        process.exit(-1);
    }
    console.log('Listening at port 3000');
})
