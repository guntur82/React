const itemRoutes = require('express').Router();
const ItemController = require('../controllers/ItemController');
const { auth } = require('../middlewares/auth');

itemRoutes.get('/', ItemController.getAllItems);
itemRoutes.post('/', auth, ItemController.createItem);
itemRoutes.put('/:id', ItemController.updateItem);
itemRoutes.delete('/:id', ItemController.deleteItem);
itemRoutes.get('/account/:id', ItemController.getItem);

module.exports = itemRoutes;
