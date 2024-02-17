import { AppError } from '../../config/common/errors/appError.js';
import { catchAsync } from '../../config/common/errors/catchAsync.js';
import { UserService } from './user.service.js';

export const validateExistUser = catchAsync(async (req, res, next) => {
    const { id } = req.params;

    const user = await UserService.findOneUser(id);

    if (user)
        return next(new AppError(`The user with id: ${id} not found`, 404));

    req.user = user;
});
