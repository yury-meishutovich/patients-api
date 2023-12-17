import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import routers from './routers';
import mongoose from 'mongoose';
import dotenv from 'dotenv'; 


dotenv.config();

const app = express();
/*
app.use(cors({
    
}));*/

app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);
server.listen(process.env.PORT, ()=>{
    console.log("Servier is running");
});

app.use('/', routers());


mongoose.Promise = Promise;
mongoose.connect(process.env.DB_URL);
mongoose.connection.on('error', (error: Error) => console.log(error));