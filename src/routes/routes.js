const express = require('express');
const app = express();
const verifyJwt = require('../middlewares/jwt.js');

const User = require('../controllers/user.controller.js');

app.post('/createUser', User.createUser);
app.post('/authUser', User.authenticate);
app.get('/authorize', verifyJwt, User.authorize);
app.put('/updateUserPersonalData/:id', User.updateUserPersonalData);
app.put('/updatePassword/:id', User.updateUserPassword);
app.delete('/deleteUser/:id', User.deleteUser);

module.exports = app;
