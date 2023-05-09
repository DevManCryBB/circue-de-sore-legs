const router = require('express').Router();

// We are using hardcoded data here, where would our data usually come from? Remember - we haven't yet set up a database or Sequelize in our app.

const exercise = [
    {
        exercise_id: 1,
        exercise_title: "Squatty Potty",
        description: "Do 5 squats before you sit down on the toilet. This is also an exercise in holding it for long road trips.",
        funny_quip: "Do 5 more when you’re done, but remember: “if you sprinkle when you tinkle, be a sweetie and wipe the seatie!”",
    },
    {
        exercise_id: 2,
        exercise_title: "Angry Cleaning",
        description: "It’s like regular cleaning but instead you do it much louder and you slam a lot more doors and cupboards.",
        funny_quip: "CAREFUL! You break it, you clean it!",
    },
    {
        exercise_id: 3,
        exercise_title: "Not on the Carpet!",
        description: "Do you hear that? Your pet's about to yak! Run as fast as you can to your pet and pick them up. Place them down on the other side of the room. Do this 5 times today.",
        funny_quip: "Your Great Dane will love this.",
    },
    {
        exercise_id: 4,
        exercise_title: "Hide and Seek",
        description: "Hide somewhere wild! Under the bed? Climb up on those kitchen counter tops!",
        funny_quip: "It's okay if your pet doesn't notice you're gone until dinner time. They really do love you.",
    },
    {
        exercise_id: 5,
        exercise_title: "Grocery Haul",
        description: "Betcha can't make it in one trip! Do whatever it takes to carry all the groceries in one go. Whoever carries the most wins!",
        funny_quip: "Why yes, we do in fact mean the paper towels, three 12-packs, gallon of milk, AND 10lb sack of potatoes",
    },
    {
        exercise_id: 6,
        exercise_title: "Reverse Airplane",
        description: "Swing your kid in circles by their ankles! You'll be extra strong because you don't want to drop them right?",
        funny_quip: "You don't want to drop them... right..?",
    },
    {
        exercise_id: 7,
        exercise_title: "Sock Skating",
        description: "It's like figure skating but much cozier. Up the speed factor with a couple of pieces of wax paper under each foot!",
        funny_quip: "Watch for splinters!",
    },
];


// get all exercises
router.get('/', async (req, res) => {
    res.render('all', {exercise});
});

// get one exercise
router.get('/exercises/:num', async (req, res) => {
    return res.render('exercises', exercise[req.params.num - 1]);
});

module.exports = router;


// [
//     {
//         "exercise_id": 1,
//         "dish_name": "Squatty Potty",
//         "description": "Do 5 squats before you sit down on the toilet. This is also an exercise in holding it for long road trips.",
//         "funny_quip": "Do 5 more when you’re done, but remember: “if you sprinkle when you tinkle, be a sweetie and wipe the seatie!”"
//     },
//     {
//         "exercise_id": 2,
//         "dish_name": "Angry Cleaning",
//         "description": "It’s like regular cleaning but instead you do it much louder and you slam a lot more doors and cupboards.",
//         "funny_quip": "CAREFUL! You break it, you clean it!"
//     },
//     {
//         "exercise_id": 3,
//         "dish_name": "Not on the Carpet!",
//         "description": "Do you hear that? Your pet's about to yak! Run as fast as you can to your pet and pick them up. Place them down on the other side of the room. Do this 5 times today.",
//         "funny_quip": "Your Great Dane will love this."
//     },
//     {
//         "exercise_id": 4,
//         "dish_name": "Hide and Seek",
//         "description": "Hide somewhere wild! Under the bed? Climb up on those kitchen counter tops!",
//         "funny_quip": "It's okay if your pet doesn't notice you're gone until dinner time. They really do love you."
//     },
//     {
//         "exercise_id": 5,
//         "dish_name": "Grocery Haul",
//         "description": "Betcha can't make it in one trip! Do whatever it takes to carry all the groceries in one go. Whoever carries the most wins!",
//         "funny_quip": "Why yes, we do in fact mean the paper towels, three 12-packs, gallon of milk, AND 10lb sack of potatoes"
//     },
//     {
//         "exercise_id": 6,
//         "dish_name": "Reverse Airplane",
//         "description": "Swing your kid in circles by their ankles! You'll be extra strong because you don't want to drop them right?",
//         "funny_quip": "You don't want to drop them... right..?"
//     },
//     {
//         "exercise_id": 7,
//         "dish_name": "Sock Skating",
//         "description": "It's like figure skating but much cozier. Up the speed factor with a couple of pieces of wax paper under each foot!",
//         "funny_quip": "Watch for splinters!"
//     }
// ]
