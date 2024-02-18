import { AppError } from '../../config/common/errors/appError.js';
import { catchAsync } from '../../config/common/errors/catchAsync.js';
import { UserService } from './user.service.js';
import { promisify } from 'util';
import jwt from 'jsonwebtoken';
import { envs } from '../../config/enviroments/enviroments.js';

export const validateExistUser = catchAsync(async (req, res, next) => {
    const { id } = req.params;

    const user = await UserService.findOneUser(id);

    if (user)
        return next(new AppError(`The user with id: ${id} not found`, 404));

    req.user = user;
});

export const protectRoutes = catchAsync(async (req, res, next) => {
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        token = req.headers.authorization.split(' ')[1];
    }

    if (!token)
        return next(
            new AppError(
                'You are not logged in, please log in to get acces',
                401
            )
        );

    const decoded = await promisify(jwt.verify)(token, envs.SECRET_JWT_SEED);

    const user = await UserService.findOneUser(decoded.id);

    if (!user) {
        return next(
            new AppError('The owner of this token it not longer available', 401)
        );
    }

    req.sessionUser = user;

    next;
});
