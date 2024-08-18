import { model, Schema } from "mongoose";
import { ObjectId } from "mongodb";
import { IUser } from "../interfaces/IUser";
import { UserRole } from "../enums/UserRole";

const schema = new Schema<IUser>(
    {
        name: { type: String, required: true},
        surname: { type: String, required: true},
        role: {type: String, enum: UserRole, required: true},
        password: { type: String, required: true},
    },
    { timestamps: true}
);




export const User = model<IUser>("User",schema);