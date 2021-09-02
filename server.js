const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 4000;

const routes = require('./routes');


app.use(cors())

app.use(express.json())

app.use('/api/v1/todos',routes.todos)

app.listen(PORT,()=>{
    console.log(`Listening on Port ${PORT}`)
})


