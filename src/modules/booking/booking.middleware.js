import { AppError } from '../../config/common/errors/appError.js';
import { catchAsync } from '../../config/common/errors/catchAsync.js';
import { BookingService } from './booking.service.js';

export const validateExistBooking = catchAsync(async (req, res, next) => {
    const { id } = req.params;

    const booking = await BookingService.findOneBooking(id);

    if (!booking)
        return next(new AppError(`The booking with id: ${id} not found`, 404));

    req.booking = booking;

    next();
});
