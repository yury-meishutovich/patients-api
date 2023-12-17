import mongoose  from 'mongoose';


const PatientSchema = new mongoose.Schema({    
    phn: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true }
});

interface IPatientDataModel {
    
    phn: string,
    firstName: string,
    lastName: string
}

export const PatientModel = mongoose.model('Patient', PatientSchema);

export const getAll = async () => await PatientModel.find();

export const deleteById = async (id: string) => await PatientModel.deleteOne({ _id: id });

export const update = async (id: string, patient: IPatientDataModel) => await PatientModel.updateOne({ _id: id }, patient);

export const add = async (patient: IPatientDataModel) => await PatientModel.create(patient);