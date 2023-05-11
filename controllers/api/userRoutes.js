const router = require("express").Router();
const { Users, Exercises } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const userData = await Users.create(req.body);
    console.log(userData)
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const userData = await Users.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

//Update user name
router.put('/updatename', (req, res) => {
  Users.update(
    {
      name: req.body.name,
    },
    {
      where: {
        name: req.session.user_id,
      },
    }
  )
    .then((updatedUser) => {
     
      res.json(updatedUser);
    })
    .catch((err) => res.json(err));
});

//add a favorite
router.post("/addfavorite",async (req,res)=>{
  if(!req.session.logged_in){
    return res.status(403).json({msg:"login first!"})
  }
  try{
    
    const userData = await Users.findOne({ where: { id:req.session.user_id } });
    console.log(req.body.exercise_id)
    const addedFavorite = await userData.addExercise(req.body.exercise_id);
   
    res.status(200).json(addedFavorite)

  }catch(err){
    res.status(400).json(err);
  }

});
//get all favorites
router.get("/favorites", async(req,res)=>{
  if(!req.session.logged_in){
    return res.status(403).json({msg:"login first!"})
  }
  try{
    
    const userData = await Users.findOne({ where: { id:req.session.user_id } });
     const allFavorites = await userData.getExercises();
     res.status(200).json(allFavorites)

  }catch(err){
    res.status(400).json(err);
  }


})
//delete a favorite
router.delete("/removefavorite/:id",async (req,res)=>{
  if(!req.session.logged_in){
    return res.status(403).json({msg:"login first!"})
  }
  try{
    const userData = await Users.findOne({ where: { id:req.session.user_id } });
    console.log("================"+ req.params.id)
    const deletedFavorite = await userData.removeExercise(req.params.id);
    res.status(200).json(deletedFavorite)

  }catch(err){
    res.status(400).json(err);
  }

})


module.exports = router;