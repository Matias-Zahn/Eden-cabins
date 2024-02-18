import { DataTypes } from 'sequelize';
import { sequelize } from '../../config/db/db.js';

const Booking = sequelize.define('bookings', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    cabinId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    initDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    endDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    numberPearson: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    totalPrice: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    partialPayment: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('cancelled', 'valid', 'completed'),
        allowNull: false,
    },
});

export default Booking;
