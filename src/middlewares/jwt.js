require('dotenv/config');
const jwt = require('jsonwebtoken');

const verifyJwt = (request, response, next) => {
    const token = request.headers['x-access-token'];

    if(token) {
        jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
            if(error) {
                console.log('Error to verify token -> ', error);
                response.status(500).send({
                    success: false,
                    message: 'Error to verify token'
                });
            }

            request.userId = decoded.id;
            next();
        });
    }
    else {
        response.status(404).send({
            success: false,
            message: 'Token needed to authenticate user'
        });
    }
}

module.exports = verifyJwt;