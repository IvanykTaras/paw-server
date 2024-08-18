import { ObjectId } from "mongoose";
import { Priority } from "../enums/Priority";
import { Status } from "../enums/Status";

export interface ITask{
        name: string;
        description: string;
        priority: Priority;
        functionalityId: ObjectId;
        estimatedTime: Date;
        status: Status;
        creationDate: Date ;
        startDate: Date | null;
        completionDate: Date | null;
        userId: ObjectId | null
}