const route = require('express').Router();

route.get('/api', (req, res) => {
  // 200 = berhasil
  res.status(200).json({
    message: 'Dashboard',
  });
});

const userRoutes = require('./user');
const itemRoutes = require('./item');
route.use('/api/users', userRoutes);
route.use('/api/items', itemRoutes);

module.exports = route;
