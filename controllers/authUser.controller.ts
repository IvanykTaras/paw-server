import { Request, Response } from "express";
import { AuthUser } from "../models/authUser.model";

export const getAuthUser = async (req:Request,res:Response)=>{
    try {
        const elements = await AuthUser.find();
        res.status(200).json(elements);
    } catch (e:any) {
        const error: Error = e; 
        res.status(500).json({message: error.message});
    }
}

export const getAuthUserById = async (req:Request,res:Response)=>{
    try {
        const { id } = req.params;
        const element = await AuthUser.findById(id);

        if(!element){
            return res.status(404).json({message: "Product doesn't exist"});
        }

        res.status(200).json(element);
    } catch (e:any) {
        const error: Error = e; 
        res.status(500).json({message: error.message});
    }
}

export const postAuthUser = async (req:Request,res:Response)=>{
    try {
        const element = await AuthUser.create(req.body);
        res.status(200).json(element);
    } catch (e:any) {
        const error: Error = e; 
        res.status(500).json({message: error.message});
    }
}

export const putAuthUser = async (req:Request,res:Response)=>{
    try {
        const {id} = req.params;
        const element = await AuthUser.findByIdAndUpdate(id, req.body);

        if(!element){
            return res.status(404).json({message: "Product doesn't exist"});
        }

        const updatedElement = await AuthUser.findById(id);

        res.status(200).json(updatedElement);

    } catch (e:any) {
        const error: Error = e; 
        res.status(500).json({message: error.message});
    }
}

export const deleteAuthUser = async (req:Request,res:Response)=>{
    try {
        const {id} = req.params;
        const element = await AuthUser.findByIdAndDelete(id);

        if(!element){
            return res.status(404).json({message: "Product doesn't exist"});
        }

        res.status(200).json({message: "successfully deleted"});

    } catch (e:any) {
        const error: Error = e; 
        res.status(500).json({message: error.message});
    }
}