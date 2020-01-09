import { Router } from "express";
import path from 'path';
import { getAllTodos, addTodos, deleteTodo } from "./todo.controller";
import { ROOT_DIR } from "../..";

const router = Router();
 
router.get('/', (req, res) => res.sendFile(path.join(ROOT_DIR, '/public/todo.html')));
router.get('/getAllTodos', getAllTodos);
router.post('/addTodos', addTodos);
router.delete('/deleteTodo/:todoId', deleteTodo);

export default router;