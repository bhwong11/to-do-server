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

module.exports={
    index,
}