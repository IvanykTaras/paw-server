import { verify } from "jsonwebtoken";
import { Request, Response } from "express";
import { IUser } from "../interfaces/IUser";
import { generateAccessToken, generateRefreshToken, REFRESH_SECRET_TOKEN } from "..";

export const token = async (req: Request,res: Response) =>{
    try{
        const refreshToken = await req.body.token;
        if (refreshToken == null) return res.sendStatus(401)
        verify(refreshToken, REFRESH_SECRET_TOKEN, (err:any,e:any)=>{
            if (err) return res.sendStatus(403)
            const user: IUser = {
                name: e.name,
                surname: e.surname,
                role: e.role,
                password: e.password
            }
            const accessToken = generateAccessToken(user)
            res.status(200).json({ accessToken })
        })
     }catch(e:any){
        const error: Error = e;
        res.status(500).json({message: error.message})
     }
        
}

export const login = async (req:Request, res: Response)=>{
    const accessToken = generateAccessToken(req.body as unknown as IUser);
    const refreshToken = generateRefreshToken(req.body as unknown as IUser);
    res.status(200).json({accessToken,refreshToken}); 
}

export const showuser = async (req:Request, res: Response)=>{
    res.status(200).json(req.body) 
}

