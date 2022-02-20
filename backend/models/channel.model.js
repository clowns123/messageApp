import mongoose from "mongoose";
import autoIdSetting from "../utils/auto-id-setter.js";

const Schema = mongoose.Schema;
const channelSchema = new Schema(
  {
    channelName: { type: String, required: true },
    private: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

autoIdSetting(channelSchema, mongoose, "Channel", "channelId");
const Channel = mongoose.model("Channel", channelSchema);
export default Channel;
