module.exports = (sequelize, Sequelize) =>{
    const restocats = sequelize.define("restocat",{
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

    return restocats
}
