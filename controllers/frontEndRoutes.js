const express = require('express');
const router = express.Router();
const {Exercises,Users} = require('../models');

// get all exercise

router.get("/", (req, res) => {
      Exercises.findAll({})
        .then((exercises) => {
          const hbsData = exercises.map(exercise=>exercise.get({plain:true}));
          console.log(hbsData)
          res.render("all",{
            allExercises:  hbsData
        })})
        .catch((err) => {
          console.log(err);
          res.status(500).json({ msg: "error", err });
        });
    });

// // get one exercise
router.get('/exercises/:id', (req, res) => {
    Exercises.findByPk(req.params.id,{})
        .then(exerData=>{
        const hbsData = exerData.get({plain:true});
        res.render("exercises",hbsData)
    })
});





module.exports = router;



