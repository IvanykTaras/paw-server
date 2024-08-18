import { Request, Response } from "express";
import { Task } from "../models/task.model";

export const getTask = async (req:Request,res:Response)=>{
    try {
        const elements = await Task.find();
        res.status(200).json(elements);
    } catch (e:any) {
        const error: Error = e; 
        res.status(500).json({message: error.message});
    }
}

export const getTaskById = async (req:Request,res:Response)=>{
    try {
        const { id } = req.params;
        const element = await Task.findById(id);

        if(!element){
            return res.status(404).json({message: "Product doesn't exist"});
        }

        res.status(200).json(element);
    } catch (e:any) {
        const error: Error = e; 
        res.status(500).json({message: error.message});
    }
}

export const postTask = async (req:Request,res:Response)=>{
    try {
        const element = await Task.create(req.body);
        res.status(200).json(element);
    } catch (e:any) {
        const error: Error = e; 
        res.status(500).json({message: error.message});
    }
}

export const putTask = async (req:Request,res:Response)=>{
    try {
        const {id} = req.params;
        const element = await Task.findByIdAndUpdate(id, req.body);

        if(!element){
            return res.status(404).json({message: "Product doesn't exist"});
        }

        const updatedElement = await Task.findById(id);

        res.status(200).json(updatedElement);

    } catch (e:any) {
        const error: Error = e; 
        res.status(500).json({message: error.message});
    }
}

export const deleteTask = async (req:Request,res:Response)=>{
    try {
        const {id} = req.params;
        const element = await Task.findByIdAndDelete(id);

        if(!element){
            return res.status(404).json({message: "Product doesn't exist"});
        }

        res.status(200).json({message: "successfully deleted"});

    } catch (e:any) {
        const error: Error = e; 
        res.status(500).json({message: error.message});
    }
}