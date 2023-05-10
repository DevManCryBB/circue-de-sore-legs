const express = require('express');
const router = express.Router();
const {Exercises,Users, ExerciseCategories} = require('../models');



//get all categories to categories page
router.get("/", (req,res) =>{
  ExerciseCategories.findAll({})
  .then((categories) =>{
    const hbsData = categories.map(category=>category.get({plain:true})); 
    res.render("categories",{
      allCategories:  hbsData
  })});
})

//get exercises by category ID
router.get('/categories/:id', (req, res) => {
  Exercises.findAll({
    where:{exercise_category_id:req.params.id}
  })
      .then(exercisesData=>{
      const hbsData = exercisesData.map(exercise => exercise.get({plain:true}));
      res.render("exercises",{
        allExercises:  hbsData
      })
  })
});


// get all exercise

router.get("/", (req, res) => {
      Exercises.findAll({})
        .then((exercises) => {
          const hbsData = exercises.map(exercise=>exercise.get({plain:true}));
          
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



