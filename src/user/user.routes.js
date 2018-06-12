var router = require('express')();
var controller = require('./user.controller');

router.get('/',(req,res)=>{
    controller.getAll().then((data)=>{
        res.status(data.status).send(data.users);
    })
})

router.post('/signup',(req,res)=>{
    controller.signup(req.body).then((data)=>{
        res.status(data.status).send(data)
    })
})

router.post('/login',(req,res)=>{
    controller.login(req.body).then((data)=>{
        if(data.status == 200)
        {
            req.session.user = {
                username: data.user.username,
                expires: new Date(Date.now() + 3 *24 * 3600 * 1000)
            }
        }
        res.status(data.status).send(req.session.user)
    })
})

router.all('/logout', (req, res) => {
    delete req.session.user; // any of these works
    req.session.destroy(); // any of these works
    res.status(200).send('logout successful')
})


module.exports = router;