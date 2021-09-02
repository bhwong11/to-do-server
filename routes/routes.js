const express = require('express');
const router = express.Router();
const controller = require('../controllers')

router.get('/',(req,res)=>{
    return res.send('hi')
})

module.exports = router;