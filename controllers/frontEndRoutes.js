const express = require('express');
const router = express.Router();
// const Captcha = require("captcha-generator-alphanumeric").default;
const {Exercises, Users, ExerciseCategories} = require('../models');



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
router.get('/exercises/:id', (req, res) => {
  console.log(req.params.id)
  Exercises.findAll({
    where:{exercise_category_id:req.params.id}
  })
      .then(exercisesData=>{
      const hbsData = exercisesData.map(exercise => exercise.get({plain:true}));
      res.render("exercises",{
        allExercises:  hbsData
    })})
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "error", err });
    });
});
// ------------------------nds------------------


// get home

router.get("/", (req, res) => {
  // let captcha = new Captcha();
<<<<<<< HEAD
  // console.log("Captcha Value: " + captcha);
  res.render("home")
  // res.render("home", { captchaImage: captcha.dataURL, captcha: captcha.value })
=======
  // console.log("Captcha Value: " + captcha); { captchaImage: captcha.dataURL, captcha: captcha.value }
  res.render("home")
>>>>>>> dev
});

// // get one exercise
router.get('/singleExercise/:id', (req, res) => {
  console.log(req.params.id)
    Exercises.findByPk(req.params.id)
        .then(exerData=>{
        const hbsData = exerData.get({plain:true});
        res.render("singleExercise",hbsData)
    })
});


router.get("/landing", async(req,res)=>{

  try{
  
    const categoryData = await ExerciseCategories.findAll({})
    const hbsDataCategory = categoryData.map(category=>category.get({plain:true})); 
    
    const userData = await Users.findOne({ where: { id:req.session.user_id } });
    const allFavorites = await userData.getExercises();
    const hbsData = allFavorites.map(exercise => exercise.get({plain:true}));
      res.render("landing",{user:userData.name, allCategories:hbsDataCategory , allFavorites:  hbsData})
  }catch(err){
    res.status(400).json(err);
  }
})





module.exports = router;







