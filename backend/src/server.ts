import express from 'express';
import path from 'path'
import cors from 'cors'
import 'express-async-errors'

import './database/conection'

import routes from './routes'
import errorHandler from './errors/handler'

const app = express();

app.use(cors())
app.use(express.json());
app.use(routes)
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler)

app.listen(3333);

/*
    // routes

    // resourse == user
    // HTTP methods== GET, POST, PUT, DELETE

    // GET    = search for data
    // POST   = create data
    // PUT    = edit data
    // DELETE = delete data

    // Query params : http://localhost:3333/users?search=tibes
    // Query params : http://localhost:3333/users/1  (identify resourse)
    // body : http://localhost:3333/users  (identify resourse)
*/