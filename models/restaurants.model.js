module.exports = (sequelize, Sequelize) =>{
    const restaurants = sequelize.define("restaurants",{
        name : {
            type : Sequelize.STRING,
            allowNull : false,
        },
        number_of_seat : {
            type : Sequelize.INTEGER,
            allowNull : false,
        },
        indoor : {
            type : Sequelize.BOOLEAN,
            allowNull : false,
        },
        outdoor: {
            type : Sequelize.BOOLEAN,
            allowNull : false,
        },
        latitude: {
            type : Sequelize.FLOAT,
            allowNull : false,
        },
        longitude: {
            type : Sequelize.FLOAT,
            allowNull : false,
        },
        address: {
            type : Sequelize.STRING,
            allowNull : false,
        },
        city: {
            type : Sequelize.STRING,
            allowNull : false,
        },
        // dollar : {
        //     type : Sequelize.INTEGER,
        //     allowNull: false
        // },
        rate : {
            type : Sequelize.INTEGER,
            allowNull: false
        },
        review : {
            type : Sequelize.INTEGER,
            allowNull: false 
        },
 
    },{
    })

    return restaurants
}