const lecturerRoute = require('express').Router();
const { LecturerController } = require('../controllers');

lecturerRoute.get('/', LecturerController.getLecturers);
lecturerRoute.get('/create', LecturerController.createPage); //page sudah tidak digunakan karna sudah pake di client
lecturerRoute.post('/create', LecturerController.create);
lecturerRoute.get('/information/:UserId', LecturerController.getInformation);
// get diganti delete karna udh pake axios di client
lecturerRoute.delete('/delete/:id', LecturerController.delete);
lecturerRoute.get('/update/:id', LecturerController.updatePage); //page sudah tidak digunakan karna sudah pake di client
// post diganti put karena udh pake axios di client
lecturerRoute.put('/update/:id', LecturerController.update);
lecturerRoute.get('/search', LecturerController.search);

module.exports = lecturerRoute;
