const express = require('express');
const router = express.Router();
const controller = require('../controllers')

router.get('/',controller.todoController.index);

router.post('/',controller.todoController.create)

router.get('/:id',controller.todoController.show);

router.delete('/:id',controller.todoController.destroy)

router.put('/:id',controller.todoController.update)

//router.get('/',(req,res)=>{
//    return res.send('hi')
//})

module.exports = router;