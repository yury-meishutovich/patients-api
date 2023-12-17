import express from 'express';
import patients from './patients';

const routers = express.Router();

export default (): express.Router => {
    patients(routers);
    return routers;
};