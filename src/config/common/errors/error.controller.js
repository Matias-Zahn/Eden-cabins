import { AppError } from './appError.js';

const handleError23503 = () => {
    return new AppError(`The id solicited not exist in this server`);
};

const handleError23505 = () =>
    new AppError('Duplicate field value: please another value', 400);

export const handleGlobalError = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'fail';

    let error = err;

    if (error.parent?.code === '23503') error = handleError23503();
    if (error.parent?.code === '23505') error = handleError23505();

    return res.status(error.statusCode).json({
        status: error.status,
        message: error.message,
        stack: error.stack,
    });
};
