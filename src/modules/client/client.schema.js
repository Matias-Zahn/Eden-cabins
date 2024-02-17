import z from 'zod';
import { extractValidator } from '../../config/common/utils/extractValidator.js';

const clientSchema = z.object({
    name: z.string().min(2).max(60),
    surname: z.string().min(2).max(60),
    dni: z.string().min(8).max(60),
    genre: z.string().min(3).max(10),
    birthdate: z.string(),
});

export function validateClient(data) {
    const result = clientSchema.safeParse(data);

    const {
        hasError,
        errorMessages,
        data: clientData,
    } = extractValidator(result);

    return { hasError, errorMessages, clientData };
}

export function validatePartialClient(data) {
    const result = clientSchema.partial().safeParse(data);

    const {
        hasError,
        errorMessages,
        data: clientData,
    } = extractValidator(result);

    return { hasError, errorMessages, clientData };
}
