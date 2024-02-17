import Client from './client.model.js';

export class ClientService {
    static async findAllClient() {
        return await Client.findAll({
            where: {
                status: true,
            },
        });
    }

    static async createClient(data) {
        return await Client.create(data);
    }

    static async findOneClient(id) {
        return await Client.findOne({
            where: {
                status: true,
                id: id,
            },
        });
    }

    static async updateClient(client, data) {
        return await client.update(data);
    }

    static async deleteClient(client) {
        return await client.update({
            status: false,
        });
    }
}
