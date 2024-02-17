import Cabin from './cabin.model.js';

export class CabinService {
    static async createCabin(data) {
        return await Cabin.create(data);
    }

    static async findOneCabin(id, status) {
        let isOccupied = 'enabled';

        if (status) isOccupied = ['enabled', 'occupied'];

        return await Cabin.findOne({
            where: {
                id: id,
                status: isOccupied,
            },
        });
    }

    static async findAllCabin(status) {
        let isOccupied = 'enabled';

        if (status) isOccupied = ['enabled', 'occupied'];

        return await Cabin.findAll({
            where: {
                status: isOccupied,
            },
        });
    }

    static async updateCabin(cabin, status) {
        let isOccupied;

        isOccupied = status ? status : 'occupied';

        return await cabin.update({
            where: {
                status: isOccupied,
            },
            status: 'occupied',
        });
    }

    static async deleteCabin(cabin) {
        return await cabin.update({
            status: 'disabled',
        });
    }
}
