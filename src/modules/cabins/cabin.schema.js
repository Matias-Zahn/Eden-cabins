import z from 'zod';
import { extractValidator } from '../../config/common/utils/extractValidator.js';

const cabinSchema = z.object({
    numberCabin: z.number({
        invalid_type_error: 'Must be Number',
        required_error: 'NumberCabin is required',
    }),
    price: z.number({
        invalid_type_error: 'Must be Number',
        required_error: 'Price is required',
    }),
    maxPearson: z.number({
        invalid_type_error: 'Must be Number',
        required_error: 'maxPearson is required',
    }),
});

export function validateCabin(data) {
    const result = cabinSchema.safeParse(data);

    const {
        hasError,
        errorMessages,
        data: cabinData,
    } = extractValidator(result);

    return { hasError, errorMessages, cabinData };
}

export function validatePartialCabin(data) {
    const result = cabinSchema.partial().safeParse(data);

    const {
        hasError,
        errorMessages,
        data: cabinData,
    } = extractValidator(result);

    return { hasError, errorMessages, cabinData };
}
