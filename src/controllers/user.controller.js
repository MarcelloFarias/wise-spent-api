const database = require('../database/database.js');
const jwt = require('jsonwebtoken');

const User = database.user;
const Spent = database.spent;

exports.createUser = (request, response) => {
    const user = {
        name: request.body.name,
        email: request.body.email,
        password: request.body.password
    };

    User.findOne({where: {email: user.email}}).then((data) => {
        if(!data) {
            User.create(user).then((data) => {
                console.log('User created -> ', data);

                response.send({
                    success: true,
                    message: 'User successfully created !'
                });
            }).catch((error) => {
                console.log('Error to create an user -> ', error);

                response.send({
                    success: false,
                    message: 'Something went wrong ! Fail to create an user.'
                });
            });
        }
        else {
            console.log('E-mail already exists -> ', data);

            response.send({
                success: false,
                message: 'E-mail already registered, please try another one !'
            });
        }
    });
}

exports.authenticate = (request, response) => {
    const receivedData = {
        email: request.body.email,
        password: request.body.password
    };

    User.findOne({
        where: {
            email: receivedData.email,
            password: receivedData.password
        }
    }).then((data) => {
        if(!data) {
            console.log('E-mail or password incorrects -> ', data);

            response.send({
                success: false,
                message: 'E-mail / Password incorrects !'
            });
        }
        else {
            console.log('User authenticated -> ', data);

            const id = data.id;
            const token = jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: 300});

            response.send({
                success: true,
                token: token
            });
        }
    }).catch((error) => {
        console.log('Error to auth user -> ', error);

        response.send({
            success: false,
            message: 'Something went wrong ! Fail to authenticate user.'
        });
    });
}

exports.authorize = (request, response) => {
    const id = request.userId;

    User.findByPk(id).then((data) => {
        if(!data) {
            console.log('User not found -> ', data);

            response.send({
                success: false,
                message: 'User not found'
            });
        }
        else {
            console.log('User authorized -> ', data);

            response.send({
                success: true,
                user: data
            });
        }
    }).catch((error) => {
        console.log('Error to authorize user -> ', error);

        response.send({
            success: false,
            message: 'Something went wrong ! Fail to authorize user'
        });
    });
}

exports.updateUserPersonalData = (request, response) => {
    const userId = request.params.id;

    const newUserData = {
        name: request.body.name,
        email: request.body.email
    };

    User.findByPk(userId).then((data) => {
        if(newUserData.email === data.email) {
            User.update(newUserData, {where: {id: userId}}).then((data) => {
                console.log('User updated successfully !');

                response.send({
                    success: true,
                    message: 'User updated successfully'
                });
            }).catch((error) => {
                console.log('Error to update an user', error);

                response.send({
                    success: false,
                    message: 'Something wend wrong, fail to update user...'
                })
            });
        }
        else {
            User.findOne({
                where: {
                    email: newUserData.email
                }
            }).then((data) => {
                if(!data) {
                    User.update(newUserData, {where: {id: userId}}).then((data) => {
                        console.log('User successfuly updated -> ', data);
        
                        response.send({
                            success: true,
                            message: 'User successfully updated !'
                        });
                    }).catch((error) => {
                        console.log('Error to update user -> ', error);
        
                        response.send({
                            success: false,
                            message: 'Something went wrong ! Fail to update user'
                        });
                    });
                }
                else {
                    console.log('E-mail already registered !', data);
        
                    response.send({
                        success: false,
                        message: 'E-mail already registered, please try another one !'
                    });
                }
            });
        }
    });
}

exports.updateUserPassword = (request, response) => {
    const userId = request.params.id;
    const newPassword = request.body.password;

    User.update({
        password: newPassword
    }, 
    {
        where: {
            id: userId
        }
    }).then((data) => {
        console.log('Password updated -> ', data);

        response.send({
            success: true,
            message: 'Password updated successfully !'
        });
    }).catch((error) => {
        console.log('Error to update a password -> ', error);

        response.send({
            success: false,
            message: 'Something went wrong ! Fail to update an user'
        });
    });
}

exports.deleteUser = (request, response) => {
    const userId = request.params.id;

    Spent.destroy({
        where: {
            idUser: userId
        }
    }).then((data) => {
        console.log("User spents from user with id: " + userId + " successfully deleteds !", data);
    }).catch((error) => {
        console.log("Something went wrong... fail to delete user spents !", error);
    }).then(() => {
        User.destroy({
            where: {
                id: userId
            }
        }).then((data) => {
            console.log('User deleted -> ', data);
    
            response.send({
                success: true,
                message: 'User successfully deleted !'
            });
        }).catch((error) => {
            console.log('Error to delete an user -> ', error);
    
            response.send({
                success: false,
                message: 'Something went wrong ! Fail to delete an user'
            });
        });
    });
}