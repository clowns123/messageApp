// user.model.js
const mongoose = require("mongoose"); // mongoose 모듈 불러오기
const Schema = mongoose.Schema; 
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    age: {
      type: Number,
      required: true,
      unique: true,
      trim: true,
      maxlength: 3,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;