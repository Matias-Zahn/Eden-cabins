import express from 'express';
import { userRoutes } from '../modules/users/user.route.js';
import { clientRoutes } from '../modules/client/client.route.js';
import { cabinRoutes } from '../modules/cabins/cabin.route.js';
import { bookingRoutes } from '../modules/booking/booking.route.js';

export const router = express.Router();

router.use('/users', userRoutes);
router.use('/clients', clientRoutes);
router.use('/cabins', cabinRoutes);
router.use('/booking', bookingRoutes);
