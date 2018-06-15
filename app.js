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


app.use('/', require('./src/user/user.routes'))

app.use('/api', router)

app.listen('3000', (err)=>{
    if(err)
    {
        console.error(err);
        process.exit(-1);
    }
    console.log('Listening at port 3000');
})
