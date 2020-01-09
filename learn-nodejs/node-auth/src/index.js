import express from 'express';
import config from './config';
import cors  from 'cors';
import morgan from 'morgan';
import {connect} from './util/db';
import { signup, signin, protect } from './util/auth';
import todoRouter  from './resources/todo/todo.router';
const app = express(); 

export const ROOT_DIR = __dirname;

const start = async () => {
    await connect();
    app.listen(config.port, () => console.log('server is up and running at ' + config.port))
}

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


app.post('/signup',signup);
app.post('/signin', signin);

app.use(protect);
app.use('/todo', todoRouter);


start();