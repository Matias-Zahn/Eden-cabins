import { catchAsync } from '../../config/common/errors/catchAsync.js';
import { validateBooking } from './booking.schema.js';
import { BookingService } from './booking.service.js';

export const findAllBoking = catchAsync(async (req, res, next) => {
    const bookings = await BookingService.findAllBooking();

    return res.status(200).json(bookings);
});
export const createBooking = catchAsync(async (req, res, next) => {
    const { hasError, errorMessages, bookingData } = validateBooking(req.body);

    if (hasError)
        return res
            .status(422)
            .json({ status: 'error', message: errorMessages });

    const booking = await BookingService.createBooking(bookingData);

    return res.status(201).json(booking);
});
export const findOneBooking = catchAsync(async (req, res, next) => {
    const { booking } = req;

    return res.status(200).json(booking);
});
export const updateBooking = catchAsync(async (req, res, next) => {
    const { booking } = req;

    await BookingService.updateBooking(booking);

    return res
        .status(200)
        .json({
            message: `Booking with id ${booking.id} has been updated succesfully`,
        });
});
export const deleteBooking = catchAsync(async (req, res, next) => {
    const { booking } = req;

    await BookingService.deleteBooking(booking);

    return res.status(204).json(null);
});
