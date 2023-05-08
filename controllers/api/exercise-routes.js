const router = require("express").Router();
const { Exercise } = require("../../models");
const ExerciseCategories = require("../../models/ExerciseCategories");

router.get("/", (req, res) => {
  Exercise.findAll({
    include: [{ model: ExerciseCategories }],
  })
    .then((exercises) => {
      res.json(exercises);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "error", err });
    });
});
