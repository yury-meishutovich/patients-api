import express from 'express';

import { getAllPatients, deletePatient, addPatient, updatePatient } from '../controllers/patients';

export default (router: express.Router) => {
  router.get('/patients',  getAllPatients);
  router.delete('/patients/:id',  deletePatient);
  router.post('/patients', addPatient);
  router.put('/patients/:id', updatePatient);
};