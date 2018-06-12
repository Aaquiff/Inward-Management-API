const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const session = require('express-session')
const RedisStore = require('connect-redis')(session)
const passport = require('passport')

const router = require('./src/routes.js')

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

app.use((req, res, next) => {
    if (req.session.user) {
        next();
    } else {
        res.status(401).send('Authrization failed! Please login');
    }
});

app.use('/api', router)

app.get('/protected', (req,res)=>{
    res.send(`You seeing this because you have a valid session.
    	Your username is ${req.session.user.username} 
        and email is ${req.session.user.email}.
    `)
})

app.listen('3000','localhost',(err)=>{
    if(err)
    {
        console.error(err);
        process.exit(-1);
    }
    console.log('Listening at port 3000');
})
