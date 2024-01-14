import express from 'express'
import Connection from './database/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import routes from './service/routes.js';
import bodyParser from 'body-parser';




dotenv.config();
const name=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;

const app=express();
const PORT=8000;

app.use(cors());
app.use(bodyParser.json({extened:true}));
app.use(bodyParser.urlencoded({extened:true}));
Connection(name,password);
app.use(routes);
app.listen(PORT,()=>{console.log("Port listening");})

