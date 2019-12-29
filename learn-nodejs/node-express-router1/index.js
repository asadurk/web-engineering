const express = require('express');
const path = require('path');
// const mongoose = require('mongoose')
const app = express()
const port = 5000;

let todoArr = [
    {id:1, todo:"first todo"},
    {id:2, todo:"second todo"}
    ];

app.use(express.json());

let requestCounter = 0;

const requestCounterMW = (req, res, next) => {
    requestCounter++;
    console.log(`Request number ${requestCounter}`);
    next();
}

// app.use(requestCounterMW);


app.get('/', (req, res) => res.sendFile(__dirname + path.join('/public/todo.html')));

app.get('/getAllTodos', requestCounterMW,  (req, res) => {
    res.statusCode = 200;
    res.setHeader('content-type', "application/json");
    res.send(JSON.stringify(todoArr));
});

app.post('/addTodo', (req, res) => {
    let todoToAdd = req.body;
    console.log(todoToAdd);
    todoToAdd.id = todoArr.length + 1;

    todoArr.push(todoToAdd);

    res.statusCode = 200;
    res.setHeader('content-type', "application/json");
    res.send(JSON.stringify(todoToAdd));

});

app.delete('/deleteTodo/:todoId', (req, res) => {
    let todoId = req.params.todoId;
    todoArr = todoArr.filter(todo => todo.id != todoId);

    res.statusCode = 200;
    res.setHeader('content-type', "application/json");
    res.send(JSON.stringify(todoArr));

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))