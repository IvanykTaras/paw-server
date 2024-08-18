import { model, Schema } from "mongoose";
import { ObjectId } from "mongodb";
import { ITask } from "../interfaces/ITask"
import { Priority } from "../enums/Priority";
import { Status } from "../enums/Status";

const schema = new Schema<ITask>(
    {
        name: {type: String, required: true},
        description: {type: String, required: true},
        priority: {type: String, enum: Priority, required: true},
        functionalityId: {type: ObjectId, required: true},
        estimatedTime: {type: Date, required: true},
        status: {type: String, enum: Status, default: Status.Todo , required: false},
        creationDate: {type: Date, default: Date.now, required: false},
        startDate: {type: Date, default: null, required: false},
        completionDate: {type: Date, default: null, required: false},
        userId: {type: ObjectId, default: null, required: false},
    },
    { timestamps: true}
);




export const Task = model<ITask>("Task",schema);