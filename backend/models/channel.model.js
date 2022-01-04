import mongoose from 'mongoose'
import {userSchema} from './user.model.js'
const Schema = mongoose.Schema;

const channelSchema = new Schema(
  {
    channelId: { type: String, required: true, unique: true },
    channelName: { type: String, required: true },
    users: [userSchema]
  },
  {
    timestamps: true,
  }
);
const Channel = mongoose.model("Channel", channelSchema);
export default Channel