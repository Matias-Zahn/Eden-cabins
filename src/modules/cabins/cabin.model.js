import { DataTypes } from 'sequelize';
import { sequelize } from '../../config/db/db.js';

const Cabin = sequelize.define('cabins', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    numberCabin: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    price: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    maxPearson: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('occupied', 'enabled', 'disabled '),
        allowNull: false,
        defaultValue: 'enabled',
    },
});

export default Cabin;
