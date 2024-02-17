import { AppError } from '../../config/common/errors/appError.js';
import { catchAsync } from '../../config/common/errors/catchAsync.js';
import { ClientService } from './client.service.js';

export const validateExistClient = catchAsync(async (req, res, next) => {
    const { id } = req.params;

    const findClient = await ClientService.findOneClient(id);

    if (!findClient)
        return next(new AppError(`Client with id: ${id}, not found`));

    req.client = findClient;

    next();
});
