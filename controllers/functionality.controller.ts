import { Request, Response } from "express";
import { Functionality } from "../models/functionality.model";

export const getFunctionality = async (req:Request,res:Response)=>{
    try {
        const elements = await Functionality.find();
        res.status(200).json(elements);
    } catch (e:any) {
        const error: Error = e; 
        res.status(500).json({message: error.message});
    }
}

export const getFunctionalityById = async (req:Request,res:Response)=>{
    try {
        const { id } = req.params;
        const element = await Functionality.findById(id);

        if(!element){
            return res.status(404).json({message: "doesn't exist"});
        }

        res.status(200).json(element);
    } catch (e:any) {
        const error: Error = e; 
        res.status(500).json({message: error.message});
    }
}

export const postFunctionality = async (req:Request,res:Response)=>{
    try {
        const element = await Functionality.create(req.body);
        res.status(200).json(element);
    } catch (e:any) {
        const error: Error = e; 
        res.status(500).json({message: error.message});
    }
}

export const putFunctionality = async (req:Request,res:Response)=>{
    try {
        const {id} = req.params;
        const element = await Functionality.findByIdAndUpdate(id, req.body);

        if(!element){
            return res.status(404).json({message: "doesn't exist"});
        }

        const updatedElement = await Functionality.findById(id);

        res.status(200).json(updatedElement);

    } catch (e:any) {
        const error: Error = e; 
        res.status(500).json({message: error.message});
    }
}

export const deleteFunctionality = async (req:Request,res:Response)=>{
    try {
        const {id} = req.params;
        const element = await Functionality.findByIdAndDelete(id);

        if(!element){
            return res.status(404).json({message: "doesn't exist"});
        }

        res.status(200).json({message: "successfully deleted"});

    } catch (e:any) {
        const error: Error = e; 
        res.status(500).json({message: error.message});
    }
}