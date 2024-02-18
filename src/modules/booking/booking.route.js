import express from 'express';
import {
    createBooking,
    deleteBooking,
    findAllBoking,
    findOneBooking,
    updateBooking,
} from './booking.controller.js';
import { validateExistBooking } from './booking.middleware.js';

export const bookingRoutes = express.Router();

bookingRoutes.get('/', findAllBoking);
bookingRoutes.post('/', createBooking);
bookingRoutes
    .route('/:id')
    .all(validateExistBooking)
    .get(findOneBooking)
    .patch(updateBooking)
    .delete(deleteBooking);
