import { Request, Response } from "express";
import { Project } from "../models/project.model";

export const getProject = async (req:Request,res:Response)=>{
    try {
        const elements = await Project.find();
        res.status(200).json(elements);
    } catch (e:any) {
        const error: Error = e; 
        res.status(500).json({message: error.message});
    }
}

export const getProjectById = async (req:Request,res:Response)=>{
    try {
        const { id } = req.params;
        const element = await Project.findById(id);

        if(!element){
            return res.status(404).json({message: "Product doesn't exist"});
        }

        res.status(200).json(element);
    } catch (e:any) {
        const error: Error = e; 
        res.status(500).json({message: error.message});
    }
}

export const postProject = async (req:Request,res:Response)=>{
    try {
        const element = await Project.create(req.body);
        res.status(200).json(element);
    } catch (e:any) {
        const error: Error = e; 
        res.status(500).json({message: error.message});
    }
}

export const putProject = async (req:Request,res:Response)=>{
    try {
        const {id} = req.params;
        const element = await Project.findByIdAndUpdate(id, req.body);

        if(!element){
            return res.status(404).json({message: "Product doesn't exist"});
        }

        const updatedElement = await Project.findById(id);

        res.status(200).json(updatedElement);

    } catch (e:any) {
        const error: Error = e; 
        res.status(500).json({message: error.message});
    }
}

export const deleteProject = async (req:Request,res:Response)=>{
    try {
        const {id} = req.params;
        const element = await Project.findByIdAndDelete(id);

        if(!element){
            return res.status(404).json({message: "Product doesn't exist"});
        }

        res.status(200).json({message: "successfully deleted"});

    } catch (e:any) {
        const error: Error = e; 
        res.status(500).json({message: error.message});
    }
}