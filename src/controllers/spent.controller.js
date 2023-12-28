const database = require('../database/database.js');
const Spent = database.spent;

exports.createSpent = (request, response) => {
    const spent = {
        name: request.body.name,
        paymentMonthDay: request.body.paymentMothDay,
        value: request.body.value,
        idUser: request.body.idUser
    }

    Spent.create(spent).then((data) => {
        console.log('Spent registered -> ', data);

        response.send({
            success: true,
            message: 'Spent registered successfully !'
        });
    }).catch((error) => {
        console.log('Fail to create a spent -> ', error);

        response.send({
            success: false,
            message: 'Something went wrong ! Fail to save a spent...'
        });
    });
}

exports.findByUserId = (request, response) => {
    const userId = request.params.id;

    Spent.findAll({
        where: {
            idUser: userId
        }
    }).then((data) => {
        console.log('Get spents of user with id: ' + id, data);

        response.send({
            success: true,
            spents: data
        });
    }).catch((error) => {
        console.log('Fail to get user spents...', error);

        response.send({
            success: false,
            message: 'Somthing went wrong ! Fail to get user spents...'
        });
    });
}

exports.deleteSpent = (request, response) => {
    const spentId = request.params.id;

    Spent.destroy({
        where: {
            id: spentId
        }
    }).then((data) => {
        console.log('Spent deleted successfully...', data);

        response.send({
            success: true,
            message: 'Spent successfully deleted !'
        });
    }).catch((error) => {
        console.log('Fail to delete a spent...', error);

        response.send({
            success: false,
            message: 'Something went wrong ! Fail to delete a spent...'
        });
    });
}

exports.updateSpent = (request, response) => {
    const spentId = request.params.id;

    const receivedData = {
        name: request.body.name,
        paymentMonthDay: request.body.paymentMonthDay,
        value: request.body.value
    };

    Spent.update(receivedData, {where: {id: spentId}}).then((data) => {
        console.log('Spent updated successfully !', data);

        response.send({
            success: true,
            message: 'Spent updated successfully !'
        });
    }).catch((error) => {
        console.log('Fail to update spent...');

        response.send({
            success: false,
            message: 'Something went wrong ! Fail to update a spent...'
        });
    });
}