import { Document, Model, model, Schema } from "mongoose";

export interface IUser extends Document {
    fname: String;
    lname: String;
    username: String;
}
  
const userSchema: Schema = new Schema({
    fname: {
      type: String,
      required: true,
    },
    lname: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true,
      unique: true
    }
  });
  
  const User: Model<IUser> = model("User", userSchema);
  
  export default User;