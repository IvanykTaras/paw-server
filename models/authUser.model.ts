import { model, Schema } from "mongoose";
import { ObjectId } from "mongodb";
import { IAuthUser } from "../interfaces/IAuthUser";
import { UserRole } from "../enums/UserRole";

const schema = new Schema<IAuthUser>(
    {
        mail: { type: String, required: true},
    },
    { timestamps: true}
);




export const AuthUser = model<IAuthUser>("AuthUser",schema);