const sequelize = require("../config/connection");
const {Exercises,ExerciseCategories} = require("../models")

const exercises =
[
    {
        name: "Squatty Potty",
        description: "Do 5 squats before you sit down on the toilet. This is also an exercise in holding it for long road trips.",
        funny_quip: "Do 5 more when you’re done, but remember: “if you sprinkle when you tinkle, be a sweetie and wipe the seatie!”",
        image:"/images/squatty-potty.gif",
        exercise_category_id: 1

    },
    {
        name: "Angry Cleaning",
        description: "It’s like regular cleaning but instead you do it much louder and you slam a lot more doors and cupboards.",
        funny_quip: "CAREFUL! You break it, you clean it!",
        image:"/images/angry-cleaning.gif",
        exercise_category_id: 1
    },
    {
        name: "Not on the Carpet!",
        description: "Do you hear that? Your pet's about to yak! Run as fast as you can to your pet and pick them up. Place them down on the other side of the room. Do this 5 times today.",
        funny_quip: "Your Great Dane will love this.",
        image:"/images/not-on-the-carpet.gif",
        exercise_category_id: 2
    },
    {
        name: "Hide and Seek",
        description: "Hide somewhere wild! Under the bed? Climb up on those kitchen counter tops!",
        funny_quip: "It's okay if your pet doesn't notice you're gone until dinner time. They really do love you.",
        image:"/images/hide-and-seek.gif",
        exercise_category_id: 2
    },
    {
        name: "Grocery Haul",
        description: "Betcha can't make it in one trip! Do whatever it takes to carry all the groceries in one go. Whoever carries the most wins!",
        funny_quip: "Why yes, we do in fact mean the paper towels, three 12-packs, gallon of milk, AND 10lb sack of potatoes",
        image:"/images/grocery-haul.gif",
        exercise_category_id: 3
    },
    {
        name: "Acro Yoga",
        description: "Use your balance and body weight to lift and anchor each other in exciting ways.",
        funny_quip: "Flippity floppity, now you're on toppity!",
        image:"/images/acro-yoga.gif",
        exercise_category_id: 3
    },
    {
        name: "Reverse Airplane",
        description: "Swing your kid in circles by their ankles! You'll be extra strong because you don't want to drop them right?",
        funny_quip: "You don't want to drop them... right..?",
        image:"/images/reverse-airplane.jpg",
        exercise_category_id: 4
    },
    {
        name: "Sock Skating",
        description: "It's like figure skating but much cozier. Up the speed factor with a couple of pieces of wax paper under each foot!",
        funny_quip: "Watch for splinters!",
        image:"/images/sock-skating.gif",
        exercise_category_id: 4
    }
]
const categories =[

    {name:"Solo"},
    {name:"With Pet"},
    {name:"With Partner"},
    {name:"With Child"}
]

const startSeeding = async ()=>{
    try {
        await sequelize.sync({force:true});
        const exerciseCategories = await ExerciseCategories.bulkCreate(categories);
        const exercisesData = await Exercises.bulkCreate(exercises);
        console.log("Success!")
        process.exit(0);
    } catch (err){
        console.log(err)
    }
}

startSeeding()