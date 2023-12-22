require('dotenv/config')
const express = require('express');
const cors = require('cors');
const database = require('./src/database/database.js');
const routes = require('./src/routes/routes.js')

const app = express();

app.use(cors());
app.use(express.json());

database.sequelize.sync();

app.use(routes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}...`);
});