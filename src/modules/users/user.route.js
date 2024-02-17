import express from 'express';
import {
    deleteUser,
    findAllUsers,
    findOneUser,
    login,
    register,
    updateUser,
} from './user.controller.js';
import { validateExistUser } from './user.middleware.js';

export const userRoutes = express.Router();

userRoutes.get('/', findAllUsers);

userRoutes.post('/register', register);

userRoutes.post('login', login);

userRoutes
    .route('/:id')
    .all(validateExistUser)
    .get(findOneUser)
    .patch(updateUser)
    .delete(deleteUser);
