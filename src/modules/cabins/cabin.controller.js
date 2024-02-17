import { catchAsync } from '../../config/common/errors/catchAsync.js';
import { validateCabin } from './cabin.schema.js';
import { CabinService } from './cabin.service.js';

export const createCabin = catchAsync(async (req, res, next) => {
    const { hasError, errorMessages, cabinData } = validateCabin(req.body);

    if (hasError)
        return res.stauts(422).json({ error: 'error', message: errorMessages });

    const cabinCreated = await CabinService.createCabin(cabinData);

    return res.status(201).json(cabinCreated);
});

export const findALlCabins = catchAsync(async (req, res, next) => {
    const cabins = await CabinService.findAllCabin();

    return res.status(200).json(cabins);
});

export const findOneCabin = catchAsync(async (req, res, next) => {
    const { cabin } = req;

    return res.status(200).json(cabin);
});
export const updateCabin = catchAsync(async (req, res, next) => {
    const { cabin } = req;

    const cabinUpdated = await CabinService.updateCabin(cabin);

    return res.status(200).json({
        message: 'Cabin status has been updated succesfully',
        status: cabinUpdated.status,
    });
});
export const deleteCabin = catchAsync(async (req, res, next) => {
    const { cabin } = req;

    await CabinService.deleteCabin(cabin);

    return res.status(204).json(null);
});
