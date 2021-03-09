module.exports = (sequelize, Sequelize) => {
    const bookingpacket = sequelize.define("bookingpacket", {
        start_time: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        duration: {
            type: Sequelize.INTEGER,
            allowNull: false,
        }


    }, {})

    return bookingpacket
}