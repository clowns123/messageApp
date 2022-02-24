import express from "express";
import User from "../models/user.model.js";

const router = express.Router();

router.get("/", (req, res) => {
  console.log("res.json", res.json);
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/", (req, res) => {
  const { name, email } = req.body;
  const newUser = new User({ name, email });
  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.delete("/user", (req, res) => {
  const { email } = req.body;
  if (!email) res.send("json을 확인하세요");
  User.deleteOne({ email }, (err, results) => {
    // 에러 발생 시, 클라이언트로 에러 전송
    if (err) {
      console.error("삭제 중 에러 발생 : " + err.stack);
      throw err;
    }
    // 결과 발생 시, 데이터 전송
    if (results) {
      console.log(results);
      res.send(email + " 삭제 완료");
    }
  });
});

router.get("/user/:email", async (req, res) => {
  const { email } = req.params;

  User.findOne({ email })
    .then((user) => res.json(user))
    .catch((err) => {
      res.status(400).json("Error: " + err);
    });
});

export default router;
