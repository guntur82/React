const userRoutes = require('express').Router();
const UserController = require('../controllers/UserController');

userRoutes.get('/', UserController.getAllUsers);
userRoutes.post('/', UserController.createUser);
userRoutes.put('/:id', UserController.updateUser);
userRoutes.delete('/:id', UserController.deleteUser);
userRoutes.get('/account/:id', UserController.getUser);

module.exports = userRoutes;
