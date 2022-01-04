import express from "express"
import User from "../models/user.model.js";

const router = express.Router();

router.get("/", (req, res) => {
  console.log("res.json", res.json);
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/add", (req, res) => {
  const { name, email, token, imageUrl } = req.body;
  const newUser = new User({ name, email, token, imageUrl });
  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});
export default router;
