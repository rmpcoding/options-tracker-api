import { model, Model, Schema, Types } from "mongoose";

interface IUser {
  _id: Types.ObjectId | string;
  email: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

interface IUserModel extends Model<IUser> {}

const UserSchema: Schema<IUser> = new Schema({
  email: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
  },
  updatedAt: {
    type: String,
    required: true,
  },
  deletedAt: {
    type: String,
    default: null,
  },
});

const User: IUserModel = model<IUser, IUserModel>("user", UserSchema);

export default User;
