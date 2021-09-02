const db = '../models';


//delete
db.Todo.deleteMany({},(err,result)=>{
    if(err){
        console.log(err);
        process.exit();
    }
    console.log(result.deletedCount,'todos deleted')
});

//Create
db.Todo.create([
      {
        "body": "get vaxxed",
        "completed": true
      },
      {
        "body": "work on portfolio",
        "completed": false
      },
      {
        "body": "do stuff",
        "completed": true
      },
    ],
    (err,seededTodos)=>{
        if(err){
            console.log(err);
            process.exit();
        }
        console.log(seededTodos.length,'todos created successfully')
    }
  )