import mongoose from "mongoose";
const Schema = mongoose.Schema;

export const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    channels: [
      {
        channelId: {
          type: Schema.Types.ObjectId,
          ref: "Channel",
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
