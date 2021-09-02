const db = require('../models');

const index = async (req,res)=>{
    try{
        const allTodos = await db.Todo.find({})
        res.status(200).json({
            todos:allTodos,
        })
    }catch(error){
        console.log(error)
        return res.send('error occured:',error)
    };
};

const create = async(req,res)=>{
    try{
        const newTodo = await db.Todo.create(req.body)
        res.status(201).json(newTodo)
    }catch(err){
        console.log(error)
        return res.send('error occured:',error)
    }
}

const update = async (req,res)=>{
    try{
        const updatedTodo = await db.Todo.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.status(200).json(updatedTodo)
    }catch(error){
        console.log(error)
        return res.send('error occured:',error)
    }
}

const destroy = async(req,res)=>{
    try{
        const deletedTodo = await db.Todo.findByIdAndDelete(req.params.id)
        return res.status(200).json(deletedTodo)
    }catch(error){
        console.log(error)
        return res.send('error occured:',error)
    }
}

module.exports={
    index,
    create,
    destroy,
    update,
}