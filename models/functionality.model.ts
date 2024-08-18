import { model, Schema } from "mongoose";
import { ObjectId } from "mongodb";
import { IFunctionality } from "../interfaces/IFunctionality";
import { Priority } from "../enums/Priority";
import { Status } from "../enums/Status";

const schema = new Schema<IFunctionality>(
    {
        name: {type: String, required: true},
        description: {type: String, required: true},
        priority: {type: String, enum: Priority, required: true},
        projectId: {type: ObjectId, required: true},
        creationDate: {type: Date, default: Date.now, required: false},
        status: {type: String, enum: Status, default: Status.Todo, required: false},
        userId: ObjectId        
    },
    { timestamps: true}
);

export const Functionality = model<IFunctionality>("Functionality",schema);