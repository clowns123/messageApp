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

router.get("/channel/:channelId", async (req, res) => {
  const { channelId } = req.params;

  Channel.findOne({ channelId })
    .then((user) => res.json(user))
    .catch((err) => {
      res.status(400).json("Error: " + err);
    });
});

router.delete("/channel", (req, res) => {
  const { channelId } = req.body;
  User.deleteOne({ channelId }, (err, results) => {
    // 에러 발생 시, 클라이언트로 에러 전송
    if (err) {
      console.error("삭제 중 에러 발생 : " + err.stack);
      throw err;
    }
    // 결과 발생 시, 데이터 전송
    if (results) {
      console.log(results);
      res.send(channelId + " 삭제 완료");
    }
  });
});

export default router;
