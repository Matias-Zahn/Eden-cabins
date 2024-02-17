import { AppError } from '../../config/common/errors/appError.js';
import { catchAsync } from '../../config/common/errors/catchAsync.js';
import { verifyPassword } from '../../config/plugins/encrypted-password.plugin.js';
import generateJWT from '../../config/plugins/generate-token.plugin.js';
import {
    validateLogin,
    validatePartialUser,
    validateRegister,
} from './user.schema.js';
import { UserService } from './user.service.js';

export const register = catchAsync(async (req, res, next) => {
    const { hasError, errorMessages, userData } = validateRegister(req.body);

    if (hasError)
        return res
            .status(422)
            .json({ status: 'error', message: errorMessages });

    const createdUser = await UserService.createUser(userData);

    const token = await generateJWT(createdUser.id);

    return res.status(201).json({
        token,
        createdUser,
    });
});

export const login = catchAsync(async (req, res, next) => {
    const { hasError, errorMessages, userData } = validateLogin(req.body);

    if (hasError)
        return res
            .status(422)
            .json({ status: 'error', message: errorMessages });

    //verificar que exista en la base de datos

    const user = await UserService.findUserByEmail(userData.email);

    if (!user) return next(new AppError('This account does not exist', 404));
    // que su contrasena coicida con la escrita por el body

    const isCorrectPassword = await verifyPassword(
        userData.password,
        user.password
    );

    if (!isCorrectPassword)
        return next(new AppError('Incorrect email or password', 401));

    const token = await generateJWT(user.id);

    return res.status(200).json({
        token,
        user,
    });
});

export const findAllUsers = catchAsync(async (req, res, next) => {
    const users = await UserService.findAllUser();

    return res.status(200).json(users);
});

export const findOneUser = catchAsync(async (req, res, next) => {
    const { user } = req;

    return res.status(200).json(user);
});

export const updateUser = catchAsync(async (req, res, next) => {
    const { user } = req;
    const { hasError, errorMessages, userData } = validatePartialUser(req.body);

    if (hasError)
        return res
            .status(422)
            .json({ status: 'error', message: errorMessages });

    const updatedUser = await UserService.updateUser(user, userData);

    return res.status(201).json(updatedUser);
});

export const deleteUser = catchAsync(async (req, res, next) => {
    const { user } = req;

    await UserService.deleteUser(user);

    return res.status(204).json(null);
});
