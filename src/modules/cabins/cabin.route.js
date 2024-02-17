import express from 'express';
import {
    createCabin,
    deleteCabin,
    findALlCabins,
    findOneCabin,
    updateCabin,
} from './cabin.controller.js';
import { validateExistCabin } from './cabin.middleware.js';

export const cabinRoutes = express.Router();

cabinRoutes.get('/', findALlCabins);

cabinRoutes.post('/', createCabin);

cabinRoutes
    .route('/:id')
    .all(validateExistCabin)
    .get(findOneCabin)
    .patch(updateCabin)
    .delete(deleteCabin);
