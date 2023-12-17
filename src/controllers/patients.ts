import express from 'express';
import { deleteById, getAll, add, update } from '../db/patients';
import { Types } from 'mongoose';

interface IPatientRequestBody {
    phn: string,
    firstName: string,
    lastName: string
}



export const getAllPatients = async (req: express.Request, res: express.Response) => {
    try {        
        const data: { _id: Types.ObjectId, phn: string, firstName: string, lastName: string }[] = await getAll();
        const retData = data?.map((item) => ({ id: item._id, firstName: item.firstName, lastName: item.lastName, phn: item.phn }));
        res.status(200).json(retData);
    } catch (error) {
        console.log(error);
        res.sendStatus(400).end();
    }
};

export const deletePatient = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;
        await deleteById(id);
        res.status(200).end();
    } catch (error) {
        console.log(error);
        res.sendStatus(400).end();
    }
}

export const addPatient = async (req: express.Request, res: express.Response) => {
    try {
        const patient: IPatientRequestBody = req.body;
        const resp = await add(patient);
        res.status(200).json({ id: resp._id });
    } catch (error) {
        console.log(error);
        res.sendStatus(400).end();
    }
}


export const updatePatient = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params
        const patient: IPatientRequestBody = req.body;
        const resp = await update(id, patient);
        res.status(200).json(resp);
    } catch (error) {
        console.log(error);
        res.sendStatus(400).end();
    }
}