import { AppError } from '../../config/common/errors/appError.js';
import { catchAsync } from '../../config/common/errors/catchAsync.js';
import { CabinService } from './cabin.service.js';

export const validateExistCabin = catchAsync(async (req, res, next) => {
    const { id } = req.params;

    const cabin = await CabinService.findOneCabin(id);

    if (!cabin)
        return next(new AppError(`The cabin with id: ${id} not found`, 404));

    req.cabin = cabin;

    next();
});
