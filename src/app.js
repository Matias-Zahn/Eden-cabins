import express, { urlencoded } from 'express';
import cors from 'cors';
import { router } from './routes/index.js';
import { handleGlobalError } from './config/common/errors/error.controller.js';
import { AppError } from './config/common/errors/appError.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use('/api/v1', router);

app.all('*', (req, res, next) => {
    next(
        new AppError(
            `The url: ${req.originalUrl} not found in this server`,
            404
        )
    );
});

app.use(handleGlobalError);

export default app;
