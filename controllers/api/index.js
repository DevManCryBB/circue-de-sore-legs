const router = require('express').Router();
const userRoutes = require('./userRoutes');
const exerciseRoutes = require('./exerciseRoutes');
const exerciseCategoriesRoutes = require('./exerciseCategoriesRoutes');

router.use('/user', userRoutes);
router.use('/exercises', exerciseRoutes);
router.use('/exercise-categories', exerciseCategoriesRoutes);



module.exports = router;