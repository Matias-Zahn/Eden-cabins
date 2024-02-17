import express from 'express';
import {
    createClient,
    deleteClient,
    findAllClients,
    findOneClient,
    updateClient,
} from './client.controller.js';
import { validateExistClient } from './client.middleware.js';

export const clientRoutes = express.Router();

clientRoutes.get('/', findAllClients);

clientRoutes.post('/', createClient);

clientRoutes
    .route('/:id')
    .all(validateExistClient)
    .get(findOneClient)
    .patch(updateClient)
    .delete(deleteClient);
