import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import channelRouter from "./routes/channel.js"
import userRouter from "./routes/users.js"
dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI; // mongoDB Connect 정보
mongoose.connect(uri, {
	useNewUrlParser: true, 
	useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection succes");
});


app.use("/channel", channelRouter);
app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});