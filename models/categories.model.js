module.exports = (sequelize, Sequelize) =>{
    const categories = sequelize.define("categories",{
        name : {
            type : Sequelize.STRING,
            allowNull : false,
        },
        image : {
            type : Sequelize.STRING,
            allowNull : false,
        }


    },{
    })

    return categories
}
