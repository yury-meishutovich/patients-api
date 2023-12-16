import express from 'express';



export const getAllPatients = async (req: express.Request, res: express.Response) => {
    try {
        

        return res.status(200).json({ "users": "users" });
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};

export const deletePatient = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;



        return res.status(200);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

export const savePatient = async (req: express.Request, res: express.Response) => {
    try {
        

        return res.status(200);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}