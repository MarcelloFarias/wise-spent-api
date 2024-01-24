module.exports = (sequelze, Sequelize) => {
    const Spent = sequelze.define('tb_spents', {
        name: {
            type: Sequelize.STRING
        },
        paymentMonthDay: {
            type: Sequelize.INTEGER,
        },
        value: {
            type: Sequelize.DOUBLE
        },
        status: {
            type: Sequelize.STRING
        },
        idUser: {
            type: Sequelize.INTEGER,
            foreingKey: true,
            allowNull: false,
            references: {
                model: 'tb_users',
                key: 'id'
           }
        }

    });

    return Spent;
}