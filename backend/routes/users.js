// users.js
const router = require("express").Router();
let User = require("../models/user.model.js");

router.get("/", (req, res) => {
	console.log('res.json', res.json);
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/add", (req, res) => {
  const {username, age} = req.body;
  const newUser = new User({ username, age });

  console.log("user/add start-----");
  console.log("username : ", username, age);
  console.log("newUser : ", newUser);
  console.log("user/add end-----");


  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});
module.exports = router;