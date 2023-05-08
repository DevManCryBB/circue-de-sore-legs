const Users = require ('./Users');
const ExerciseCategories = require ('./ExerciseCategories');
const Exercises =require('./Exercises');
const UserExercise = require('./UsersExercises');

Category.hasMany(Exercises);
Exercises.belongsTo(ExerciseCategories);

Users.belongsToMany(Exercises,{
    through:{
        model: UserExercise
    }    
});
Exercises.belongsToMany(Users,{
    through:{
        model: UserExercise
    }
});

