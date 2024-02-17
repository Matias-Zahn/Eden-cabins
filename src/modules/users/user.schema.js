import z from 'zod';
import { extractValidator } from '../../config/common/utils/extractValidator.js';

const userRegisterSchema = z.object({
    name: z.string().min(2).max(60),
    surname: z.string().min(2).max(60),
    email: z.string().email(),
    password: z.string().min(8).max(60),
});

const userLoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8).max(60),
});

export function validateRegister(data) {
    const result = userRegisterSchema.safeParse(data);

    const {
        hasError,
        errorMessages,
        data: userData,
    } = extractValidator(result);

    return {
        hasError,
        errorMessages,
        userData,
    };
}

export function validateLogin(data) {
    const result = userLoginSchema.safeParse(data);

    const {
        hasError,
        errorMessages,
        data: userData,
    } = extractValidator(result);

    return {
        hasError,
        errorMessages,
        userData,
    };
}

export function validatePartialUser(data) {
    const result = userRegisterSchema.partial().safeParse(data);

    const {
        hasError,
        errorMessages,
        data: userData,
    } = extractValidator(result);

    return {
        hasError,
        errorMessages,
        userData,
    };
}
