const express = require('express');
const app = express();
const verifyJwt = require('../middlewares/jwt.js');

const User = require('../controllers/user.controller.js');
const Spent = require('../controllers/spent.controller.js');

app.post('/createUser', User.createUser);
app.post('/authUser', User.authenticate);
app.get('/authorize', verifyJwt, User.authorize);
app.put('/updateUserPersonalData/:id', User.updateUserPersonalData);
app.put('/updatePassword/:id', User.updateUserPassword);
app.delete('/deleteUser/:id', User.deleteUser);

app.post('/createSpent', Spent.createSpent);
app.get('/getSpent/:id', Spent.findById);
app.get('/getSpents/:id', Spent.findByUserId);
app.put('/updateSpent/:id', Spent.updateSpent);
app.put('/updateSpentStatus/:id', Spent.updateSpentStatus);
app.delete('/deleteSpent/:id', Spent.deleteSpent);

module.exports = app;
