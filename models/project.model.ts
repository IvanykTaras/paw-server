import { model, Schema } from "mongoose";
import { IProject } from "../interfaces/IProject";
import { ObjectId } from "mongodb";

const schema = new Schema<IProject>(
    {
        name: { type: String, required: true},
        description: { type: String, required: true},
    },
    { timestamps: true}
);

export const Project = model<IProject>("Project",schema);