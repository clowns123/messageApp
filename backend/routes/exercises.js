const router = require("express").Router();
const Exercises = require("../models/exercise.model");

router.get("/", (req, res) => {
  Exercises.find()
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status(400).json("ERROR: " + err));
});

router.post("/add", (req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newExercise = new Exercises({
    username,
    description,
    duration,
    date,
  });

  newExercise
    .save()
    .then(() => res.json("Exercise added!"))
    .catch((err) => res.status(400).json("ERROR :" + err));
});

router.get("/:id", (req, res) => {
  Exercises.findById(req.params.id)
    .then((exer) => res.json(exer))
    .catch((err) => res.status(400).json("ERROR: " + err));
});

router.delete("/:id", (req, res) => {
  Exercises.findByIdAndDelete(req.params.id)
    .then(() => res.json("Exercise deleted"))
    .catch((err) => res.status(400).json("ERROR :" + err));
});

router.put("/update/:id", (req, res) => {
  Exercises.findById(req.params.id)
    .then((exercise) => {
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.duration = Number(req.body.duration);
      exercise.date = Date.parse(req.body.date);
      exercise
        .save()
        .then(() => res.json("Updated!"))
        .catch((err) => res.status(400).json("ERROR: " + err));
    })
    .catch((err) => res.status(400).json("ERROR: " + err));
});

module.exports = router;