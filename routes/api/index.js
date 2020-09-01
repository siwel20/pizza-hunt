const router = require('express').Router();

//add prefex of '/comments/ to routes created in 'comment-routes.js'.
const commentRoutes = require('./comment-routes');
// add prefix of `/pizzas` to routes created in `pizza-routes.js`
const pizzaRoutes = require('./pizza-routes');

router.use('/comments', commentRoutes);
router.use('/pizzas', pizzaRoutes);

module.exports = router;