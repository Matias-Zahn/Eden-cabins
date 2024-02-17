import User from './user.model.js';

export class UserService {
    static async createUser(data) {
        return await User.create(data);
    }

    static async findAllUser() {
        return await User.findAll({
            where: {
                status: true,
            },
        });
    }

    static async findOneUser(id) {
        return await User.findOne({
            where: {
                id: id,
                status: true,
            },
        });
    }

    static async findUserByEmail(email) {
        return await User.findOne({
            where: {
                email: email,
                status: true,
            },
        });
    }

    static async updateUser(user, data) {
        return await user.update(data);
    }

    static async deleteUser(user) {
        return await user.update({
            status: false,
        });
    }
}
