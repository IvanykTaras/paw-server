import { Request, Response, Router } from "express";
import { Mongoose } from "mongoose";
import { Express } from "express";

const cors = require("cors");
const express = require("express");
const mongoose: Mongoose = require("mongoose");
const app: Express = express();
const functionalityRoute: Router = require("./routes/functionality.rout");
const projectRoute: Router = require("./routes/project.rout");
const taskRoute: Router = require("./routes/task.rout");
const userRoute: Router = require("./routes/user.rout");
const PORT = 8000;

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

app.get("/",(res:Response, req:Request)=>{
    res.send("work");
})
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





    