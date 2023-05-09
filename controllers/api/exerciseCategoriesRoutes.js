const router = require("express").Router();
const { ExerciseCategories, Exercises } = require("../../models");


router.get("/", (req, res) => {

    ExerciseCategories.findAll({})
    .then((categories) => {
      res.status(200).json(categories);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "error", err });
    });
});

router.get("/:id",(req,res)=>{
  ExerciseCategories.findByPk(req.params.id,{
      include:[Exercises]
  }).then(categoryData=>{
    if(!categoryData){
      res.status(404).json({message:'No category found with this id'});
      }
    res.status(200).json(categoryData);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json({ msg: "error", err });
  });
});

// router.get("/", (req, res) => {
//   ExerciseCategories.findAll({
//     include: [{ model: Exercises }],
//   })
//     .then((categories) => {
//       const hbsData = categories.map(category=>category.get({plain:true}));
//       console.log(hbsData);
//       res.render("categories",{
//           allCategories:hbsData,
//           logged_in: req.session.logged_in
//     })})
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json({ msg: "error", err });
//     });
// });


module.exports = router;