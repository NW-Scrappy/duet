module.exports = function (sequelize, DataTypes) {

    var User = sequelize.define('User', {

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

    // User.associate = function (models) {

    //     User.hasMany(models.Badge, {
    //         foreignKey: {
    //             defaultValue: true
    //         }
    //     });
    //        User.hasMany(models.Task, {
    //         foreignKey: {
    //             defaultValue: true
    //         }
    //     });
    // };


    return User;
};
