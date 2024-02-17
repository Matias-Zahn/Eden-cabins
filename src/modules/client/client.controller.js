import { catchAsync } from '../../config/common/errors/catchAsync.js';
import { validateClient, validatePartialClient } from './client.schema.js';
import { ClientService } from './client.service.js';

export const findAllClients = catchAsync(async (req, res, next) => {
    const clients = await ClientService.findAllClient();

    return res.status(200).json(clients);
});

export const createClient = catchAsync(async (req, res, next) => {
    const { hasError, errorMessages, clientData } = validateClient(req.body);

    if (hasError)
        return res.status(422).json({ error: 'error', message: errorMessages });

    const clientCreated = await ClientService.createClient(clientData);

    return res.status(201).json(clientCreated);
});

export const findOneClient = catchAsync(async (req, res, next) => {
    const { client } = req;

    return res.status(200).json(client);
});

export const updateClient = catchAsync(async (req, res, next) => {
    const { client } = req;
    const { hasError, errorMessages, clientData } = validatePartialClient(
        req.body
    );

    if (hasError)
        return res.status(422).json({ error: 'error', message: errorMessages });

    await ClientService.updateClient(client, clientData);

    return res
        .status(200)
        .json({ message: 'The client has been updated succesfully' });
});

export const deleteClient = catchAsync(async (req, res, next) => {
    const { client } = req;

    await ClientService.deleteClient(client);

    return res.status(204).json(null);
});
