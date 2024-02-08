const Bcrypt = require("bcrypt");

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('tb_users', {
        name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        }
    });

    User.beforeCreate((user) => {
        const salts = 10;

        return Bcrypt.hash(user.password, salts).then((hash) => {
            user.password = hash;
        }).catch((error) => {
            console.log(error);
        });
    });

    return User;
}