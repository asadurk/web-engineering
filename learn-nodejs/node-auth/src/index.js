import express from 'express';
import config from './config';
import cors  from 'cors';
import morgan from 'morgan';
import {connect} from './util/db'
import { signup, signin, protect } from './util/auth';
const app = express();

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
app.get('/todo', (req,res) => res.sendFile(__dirname + '/public/todo.html'));


start();