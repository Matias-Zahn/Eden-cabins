import { DataTypes } from 'sequelize';
import { sequelize } from '../../config/db/db.js';
import { encryptedPassword } from '../../config/plugins/encrypted-password.plugin.js';
const User = sequelize.define(
    'users',
    {
        id: {
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            type: DataTypes.INTEGER,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        surname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.ENUM('client', 'developer'),
            allowNull: false,
            defaultValue: 'client',
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
    },
    {
        hooks: {
            beforeCreate: async (user) => {
                user.password = await encryptedPassword(user.password);
            },
        },
    }
);

export default User;
