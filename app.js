var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.json())

app.listen('3000','localhost',(err)=>{
    if(err)
    {
        console.error(err);
        process.exit(-1);
    }
    console.log('Listening at port 3000');
})
