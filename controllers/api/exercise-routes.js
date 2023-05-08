const router = require("express").Router();
const { Exercise } = require("../../models");

router.post('/', async (req,res) =>{
    try{
        const newExercise = await Exercise.create({
            ...req.body,
        })
    }
})