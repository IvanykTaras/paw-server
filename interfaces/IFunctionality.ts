import { ObjectId } from "mongoose";
import { Priority } from "../enums/Priority";
import { Status } from "../enums/Status";

export interface IFunctionality{
    name: string;
    description: string;
    priority: Priority;
    projectId: ObjectId;
    creationDate: Date | null;
    status: Status | null;
    userId: ObjectId;
}