module.exports = (sequelize, Sequelize) =>{
    const suggest = sequelize.define("suggest",{
        name : {
            type : Sequelize.STRING,
            allowNull : false,
        },
        phone : {
            type : Sequelize.STRING,
            allowNull : false,
        },
        email : {
            type : Sequelize.STRING,
            allowNull : false,
        },
        content :{
            type : Sequelize.STRING,
            allowNull : false,
        }

    },{
    })

    return suggest
}
