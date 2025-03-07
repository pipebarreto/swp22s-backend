import express from 'express';

import task from './task.js';
import report from './report.js';
import signature from './signature.js';
import country from './country.js';
import orderType from './orderType.js';


const routes = express.Router();
routes.use('/task', task);
routes.use('/report', report);
routes.use('/signature', signature);
routes.use('/country',country)
routes.use('/type',orderType)

export default routes;