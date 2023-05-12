const Users = require ('./Users');
const ExerciseCategories = require ('./ExerciseCategories');
const Exercises =require('./Exercises');


ExerciseCategories.hasMany(Exercises);
Exercises.belongsTo(ExerciseCategories);

Users.belongsToMany(Exercises,{
    through:'Favorites'   
});

Exercises.belongsToMany(Users,{
    through:'Favorites'
});

module.exports = {Users, ExerciseCategories, Exercises}