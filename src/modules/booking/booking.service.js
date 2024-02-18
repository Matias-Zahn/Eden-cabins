import Booking from './booking.model.js';

export class BookingService {
    static async findAllBooking() {
        return await Booking.findAll({
            where: {
                status: true,
            },
        });
    }

    static async findOneBooking(id) {
        return await Booking.findOne({
            where: {
                status: true,
                id: id,
            },
        });
    }

    static async createBooking(data) {
        return await Booking.create(data);
    }

    static async updateBooking(booking) {
        return await booking.update({
            status: 'completed',
        });
    }

    static async deleteBooking(booking) {
        return await booking.update({
            status: 'canceled',
        });
    }
}
