import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConectionsController';

const routes = express.Router();
const ClassesControllers = new ClassesController();
const ConnectionsControllers = new ConnectionsController();

routes.post('/classes', ClassesControllers.Create);
routes.get('/classes', ClassesControllers.index);

routes.post('/connections', ConnectionsControllers.create);
routes.get('/connections', ConnectionsControllers.index);
export default routes;