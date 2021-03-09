module.exports = (sequelize, Sequelize) => {
    const restocats = sequelize.define("restocat", {
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        cardimage: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        bannerimage: {
            type: Sequelize.STRING,
            allowNull: false,
        }


    }, {})

    return restocats
}