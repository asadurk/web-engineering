import { Todo } from "./todo.model";

export const getAllTodos = async (req, res)  => {
    const todoList = await Todo.find({});
    res.statusCode = 200;
    res.setHeader('content-type', 'application/json');
    res.send(JSON.stringify(todoList));
};


export const addTodos = async (req, res) => {
    const todo = await Todo.create(req.body);
    res.statusCode = 200;
    res.setHeader('content-type', 'application/json');
    res.send(JSON.stringify(todo));
}

export const deleteTodo = async (req, res)=> {
        const todo = await Todo.findByIdAndRemove(todoId);
        res.statusCode = 200;
        res.setHeader('content-type', 'application/json');
        res.send(JSON.stringify(todo));
    
}
