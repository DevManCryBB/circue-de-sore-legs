const router = require('express').Router();
const userRoutes = require('./userRoutes');
const exerciseRoutes = require('./exerciseRoutes');
const exerciseCategoriesRoutes = require('./exerciseCategoriesRoutes');
const favoritesRoutes = require('./favoritesRoutes');

router.use('/user', userRoutes);
router.use('/exercise', exerciseRoutes);
router.use('/exercise-categories', exerciseCategoriesRoutes);
router.use('/favorites', favoritesRoutes);

module.exports = router;