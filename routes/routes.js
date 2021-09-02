const express = require('express');
const router = express.Router();
const controller = require('../controllers')

router.get('/',controller.todoController.index);

router.post('/',controller.todoController.create)

router.delete('/:id',controller.todoController.destroy)

//router.get('/',(req,res)=>{
//    return res.send('hi')
//})

module.exports = router;