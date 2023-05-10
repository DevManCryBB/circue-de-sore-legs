const express = require('express');
const router = express.Router();
const {Exercises,Users, ExerciseCategories} = require('../models');



//get all categories to categories page
router.get("/categories", (req,res) =>{
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
      res.render("all",{
        allExercises:  hbsData
      })
  })
});


// get home

router.get("/", (req, res) => {
  res.render("home")
      // Exercises.findAll({})
      //   .then((exercises) => {
      //     const hbsData = exercises.map(exercise=>exercise.get({plain:true}));
          
      //     res.render("all",{
      //       allExercises:  hbsData
      //   })})
      //   .catch((err) => {
      //     console.log(err);
      //     res.status(500).json({ msg: "error", err });
      //   });
    });

// // get one exercise
router.get('/exercises/:id', (req, res) => {
    Exercises.findByPk(req.params.id,{})
        .then(exerData=>{
        const hbsData = exerData.get({plain:true});
        res.render("exercises",hbsData)
    })
});

//get favorites for profile
router.get("/profile", async(req,res)=>{
  try{
    const userData = await Users.findOne({ where: { id:req.session.user_id } });
     const allFavorites = await userData.getExercises();
     const hbsData = allFavorites.map(exercise => exercise.get({plain:true}));
      res.render("profile",{
        allFavorites:  hbsData
      })
  }catch(err){
    res.status(400).json(err);
  }


})





module.exports = router;



