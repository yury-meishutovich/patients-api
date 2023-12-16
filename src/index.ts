import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import routers from './routers';
const app = express();
/*
app.use(cors({
    
}));*/

app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);
server.listen(9001, ()=>{
    console.log("Servier is running");
});

app.use('/', routers());