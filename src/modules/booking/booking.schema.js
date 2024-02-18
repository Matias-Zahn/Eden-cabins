import z from 'zod';
import { extractValidator } from '../../config/common/utils/extractValidator.js';

const bookingSchema = z.object({
    cabinId: z.number(),
    initDate: z.date(),
    endDate: z.date(),
    numberPearson: z.string(),
    totalPrice: z.string(),
    partialPayment: z.string(),
});

export function validateBooking(data) {
    const result = bookingSchema.safeParse(data);

    const {
        hasError,
        errorMessages,
        data: bookingData,
    } = extractValidator(result);

    return { hasError, errorMessages, bookingData };
}
