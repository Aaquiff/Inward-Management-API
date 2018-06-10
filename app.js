const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

var router = require('./src/routes.js')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use('/', router)

app.listen('3000','localhost',(err)=>{
    if(err)
    {
        console.error(err);
        process.exit(-1);
    }
    console.log('Listening at port 3000');
})
