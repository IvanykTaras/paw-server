import { Request, Response } from "express";
import { User } from "../models/user.model";

export const getUser = async (req:Request,res:Response)=>{
    try {
        const elements = await User.find();
        res.status(200).json(elements);
    } catch (e:any) {
        const error: Error = e; 
        res.status(500).json({message: error.message});
    }
}

export const getUserById = async (req:Request,res:Response)=>{
    try {
        const { id } = req.params;
        const element = await User.findById(id);

        if(!element){
            return res.status(404).json({message: "Product doesn't exist"});
        }

        res.status(200).json(element);
    } catch (e:any) {
        const error: Error = e; 
        res.status(500).json({message: error.message});
    }
}

export const postUser = async (req:Request,res:Response)=>{
    try {
        const element = await User.create(req.body);
        res.status(200).json(element);
    } catch (e:any) {
        const error: Error = e; 
        res.status(500).json({message: error.message});
    }
}

export const putUser = async (req:Request,res:Response)=>{
    try {
        const {id} = req.params;
        const element = await User.findByIdAndUpdate(id, req.body);

        if(!element){
            return res.status(404).json({message: "Product doesn't exist"});
        }

        const updatedElement = await User.findById(id);

        res.status(200).json(updatedElement);

    } catch (e:any) {
        const error: Error = e; 
        res.status(500).json({message: error.message});
    }
}

export const deleteUser = async (req:Request,res:Response)=>{
    try {
        const {id} = req.params;
        const element = await User.findByIdAndDelete(id);

        if(!element){
            return res.status(404).json({message: "Product doesn't exist"});
        }

        res.status(200).json({message: "successfully deleted"});

    } catch (e:any) {
        const error: Error = e; 
        res.status(500).json({message: error.message});
    }
}