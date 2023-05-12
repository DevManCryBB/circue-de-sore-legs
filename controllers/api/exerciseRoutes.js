const router = require("express").Router();
const { Exercises, ExerciseCategories } = require("../../models");


router.get("/", (req, res) => {
  Exercises.findAll({})
    .then((exercises) => {
      res.json(exercises);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "error", err });
    });
});




module.exports = router;