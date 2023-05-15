const express = require('express');
const router = express.Router();
const Recaptcha = require('express-recaptcha').RecaptchaV2;
const {Exercises, Users, ExerciseCategories} = require('../models');

var recaptcha = new Recaptcha('6Lew1A0mAAAAAPVxYDap9zoBs5ZpdkfI5SimD5s7', '6Lew1A0mAAAAAIkS45cLEAnx6lhmYq7umfPQaraU');

//get all categories to categories page
router.get("/categories", (req,res) =>{
  ExerciseCategories.findAll({})
  .then((categories) =>{
    const hbsData = categories.map(category=>category.get({plain:true})); 
    res.render("categories",{
      allCategories:  hbsData
  })});
})
router.get("/updateName", (req,res) =>{
  res.render("updateName")
});
//get exercises by category ID
router.get('/exercises/:id', (req, res) => {
  console.log("+++++++++++++++++++++++"+req.params.id)
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
  res.render("home", { captcha: recaptcha.render() })
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
      res.render("landing",{user:userData.name, allCategories:hbsDataCategory , allFavorites:  hbsData});
  }catch(err){
    res.status(400).json(err);
  }
});

router.get("/favorites", async(req,res)=>{
  try{
    const userData = await Users.findOne({ where: { id:req.session.user_id } });
    const allFavorites = await userData.getExercises();
  const hbsData = allFavorites.map(exercise => exercise.get({plain:true}));
  console.log("Extracted hbsData: " + hbsData);
  res.render("favorites",{allFavorites: hbsData});
  } catch (err) {
    res.status(400).json(err);
  }
});





module.exports = router;







