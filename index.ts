import { NextFunction, Request, Response, Router } from "express";
import { Mongoose } from "mongoose";
import { Express } from "express";
import { IUser } from "./interfaces/IUser";
import { sign, verify } from "jsonwebtoken";

const cors = require("cors");
const express = require("express");
const mongoose: Mongoose = require("mongoose");
const app: Express = express();
const jwt = require("jsonwebtoken");
const functionalityRoute: Router = require("./routes/functionality.rout");
const projectRoute: Router = require("./routes/project.rout");
const taskRoute: Router = require("./routes/task.rout");
const userRoute: Router = require("./routes/user.rout");
const authoriazationRoute: Router = require("./routes/authorization.rout");

const PORT = 8000;

export const ACCESS_SECRET_TOKEN = "access"
export const REFRESH_SECRET_TOKEN = "refresh"

//
// midleware
//
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors())


//
// routes
//
app.use("/api/functionality", functionalityRoute);
app.use("/api/project", projectRoute);
app.use("/api/task", taskRoute);
app.use("/api/user", userRoute);
app.use("/api/authoriazation", authoriazationRoute)






//
// JWT functions
//

export function generateAccessToken(e: IUser) {
    return sign(e, ACCESS_SECRET_TOKEN, {expiresIn: "5m"})
}

export function generateRefreshToken(e: IUser){
    return sign(e, REFRESH_SECRET_TOKEN, {expiresIn: "1h"})
}

export function authenticateToken(req: Request, res: Response, next: NextFunction){
    const authHeader = req.headers.authorization
    const token: string = authHeader?.split(' ')[1] as string
    if(token === null) res.status(401);

    verify(token, ACCESS_SECRET_TOKEN, (err, user)=> {
        if(err) return res.sendStatus(403)
        req.body = req.body
        next();
    } )
} 




//
// mongodb connection
//
mongoose.connect("mongodb+srv://admin:admin@database.0mg0fy1.mongodb.net/?retryWrites=true&w=majority&appName=database")
    .then(()=> {
        console.log("Connected to database")
        
        
        // set port
        app.listen(PORT, ()=>{
            console.log(`Server is running on port: ${PORT}`) 
        });
    })
    .catch(()=> console.log("Connection failed!!!"));





    