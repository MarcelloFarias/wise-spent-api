require('dotenv/config');
const Sequelize = require('sequelize');
const User = require('../models/user.model.js');
const Spent = require('../models/spent.model.js');

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    dialect: 'mysql',
    host: dbHost
});

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.user = User(sequelize, Sequelize);
db.spent = Spent(sequelize, Sequelize);

module.exports = db;