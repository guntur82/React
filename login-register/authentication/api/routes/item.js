const itemRoutes = require('express').Router();
const ItemController = require('../controllers/ItemController');

itemRoutes.get('/', ItemController.getAllItems);
itemRoutes.post('/', ItemController.createItem);
itemRoutes.put('/:id', ItemController.updateItem);
itemRoutes.delete('/:id', ItemController.deleteItem);
itemRoutes.get('/account/:id', ItemController.getItem);

module.exports = itemRoutes;
