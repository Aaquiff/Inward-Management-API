var router = require('express')();

router.get('/',(req,res)=>{
    var admissions = [
        {}
        ]
   res.status(200).send();
});

module.exports = router;