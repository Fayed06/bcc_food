module.exports = (sequelize, Sequelize) => {
    const foodCategory = sequelize.define("foodCategory", {
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },

    }, {})

    return foodCategory
}