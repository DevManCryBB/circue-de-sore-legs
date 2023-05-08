const router = require("express").Router();
const { ExerciseCategories, Exercises } = require("../../models");


router.get("/", (req, res) => {
    ExerciseCategories.findAll({
    include: [{ model: Exercises }],
  })
    .then((categories) => {
      res.json(categories);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "error", err });
    });
});

module.exports = router;