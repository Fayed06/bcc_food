const bcrypt = require('bcryptjs');

module.exports = (sequelize, Sequelize) =>{
    var salt = bcrypt.genSaltSync(7)

    const user = sequelize.define("user",{
        name : {
            type : Sequelize.STRING,
            allowNull : false,
        },

        phone : {
            type : Sequelize.STRING,
            allowNull : false,
        },

        image : {
            type : Sequelize.STRING,
            allowNull : false,
        },

        email : {
            type : Sequelize.STRING,
            allowNull : false,
            unique : true,
        },

        password : {
            type : Sequelize.STRING,
            allowNull : false,

            set(value){
                this.setDataValue('password', bcrypt.hashSync(value, salt))
            }
        }
    },{
    })

    user.prototype.toJSON = function(){
        var values = Object.assign({}, this.get())

        delete values.password
        return values
    }

    return user
}