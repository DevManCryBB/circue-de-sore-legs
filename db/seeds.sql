-- Active: 1683085212283@@127.0.0.1@3306@exercise_project_db
USE exercise_project_db;

INSERT INTO exercise_categories (name)
VALUES 
("Solo"),
("With Pet"),
("With Partner"),
("With Child");

INSERT INTO exercises (name, description,funny_quip,exercise_category_id)
VALUES
("Squatty Potty", 
"Do 5 squats before you sit down on the toilet. This is also an exercise in holding it for long road trips.","Do 5 more when you’re done, but remember: “if you sprinkle when you tinkle, be a sweetie and wipe the seatie!”",1),
("Angry Cleaning","It’s like regular cleaning but instead you do it much louder and you slam a lot more doors and cupboards.","CAREFUL! You break, you clean!",1),
("Not on the Carpet!","Do you hear that? Your pet's about to yak! Run as fast as you can to your pet and pick them up. Place them down on the other side of the room. Do this 5 times today.","Your Great Dane will love this.",2), 
("Hide and Seek","Hide somewhere wild! Under the bed? Climb up on those kitchen counter tops!","It's okay if your pet doesn't notice you're gone until dinner time. They really do love you.",2),
("Grocery Haul","Betcha can't make it in one trip! Do whatever it takes to carry all the groceries in one go. Whoever carries the most wins!","Why yes, we do in fact mean the paper towels, three 12-packs, gallon of milk, AND 10lb sack of potatoes",3),
("Reverse Airplane","Swing your kid in circles by their ankles! You'll be extra strong because you don't want to drop them right?","You don't want to drop them... right..?",4),
("Sock Skating","It's like figure skating but much cozier. Up the speed factor with a couple of pieces of wax paper under each foot!","Watch for splinters!",4);




SELECT * FROM exercise_categories;
SELECT * FROM exercises;

