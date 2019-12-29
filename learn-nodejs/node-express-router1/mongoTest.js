const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
//jsonb

const app = express();
const PORT = 3000;
app.listen(PORT, ()=> {
    console.log('server is up and running');
});

app.use(express.json());
app.get('/', (req, res) => 
res.sendFile(path.join(__dirname, "/public/todo.html")));

app.get('/getAllTodos',async  (req, res) => {
    await connect();
    const todoList = await Todo.find({});
    res.statusCode = 200;
    res.setHeader('content-type', 'application/json');
    res.send(JSON.stringify(todoList));
});

app.post('/addTodos', async (req, res) => {
    await connect();//blocking line
    const todo = await Todo.create(req.body);
    res.statusCode = 200;
    res.setHeader('content-type', 'application/json');
    res.send(JSON.stringify(todo));

});

app.delete('/deleteTodo/:todoId', async (req, res)=> {
    let todoId = req.params.todoId;
    await connect();
    const todo = await Todo.findByIdAndRemove(todoId);
    res.statusCode = 200;
    res.setHeader('content-type', 'application/json');
    res.send(JSON.stringify(todo));

});

const connect = () => 
mongoose.connect('mongodb://localhost:27017/todoDB', 
{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
} );

const todoSchema = new mongoose.Schema({
    todo: String
});

const Todo = mongoose.model('todo', todoSchema);


async function addTodo() {
    await connect();//blocking line
    const todo = await Todo.create({todo: 'second todo'});
    console.log(todo);
}

async function getAllTodos() {
    await connect();
    const todoList = await Todo.find({});
    console.log(todoList);
}

async function deleteTodo(todoId) {
    await connect();
    const todo = await Todo.findByIdAndRemove(todoId);
    console.log(todo);
}


// addTodo();
// getAllTodos();
// deleteTodo('5e088ba0e6562d21384802b3');