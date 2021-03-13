module.exports = function (sequelize, DataTypes) {

    var NewUser = sequelize.define('User', {

        UserName: {
            type: DataTypes.TEXT,
            notEmpty: true
        },
        Email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            }
        },
        Password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })


    return NewUser;
};
