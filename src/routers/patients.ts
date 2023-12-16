import express from 'express';

import { getAllPatients, deletePatient, savePatient } from '../controllers/patients';


export default (router: express.Router) => {
  router.get('/patients',  getAllPatients);
  router.delete('/patients/:id',  deletePatient);
  router.put('/patient', savePatient);
};