import express from "express";
import Channel from "../models/channel.model.js";

const router = express.Router();

router.get("/", (req, res) => {
  Channel.find()
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status(400).json("ERROR: " + err));
});

/**
 * channelId: { type: String, required: true, unique: true },
 * channelName: { type: String, required: true },
 * isPrivate: { type: String, required: true }
 */
router.post("/", (req, res) => {
  const { channelName, isPrivate } = req.body;
  const newChannel = new Channel({ channelName, private: isPrivate });
  newChannel
    .save()
    .then(() => res.json("Create Channel!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

export default router;
