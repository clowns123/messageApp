import express from "express"
import Channel from "../models/channel.model.js"

const router = express.Router();

router.get("/", (req, res) => {
  Channel.find()
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status(400).json("ERROR: " + err));
});

export default router;