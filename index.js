const express = require('express');
require('dotenv').config();

const { mongoDB } = require('./db');
const urlRoutes = require('./routes/urlRoutes.js');

const app = express();

mongoDB();

app.use(express.json());
app.use('/url', urlRoutes);

app.listen(process.env.PORT, (error) => { if (error) console.log("Error Starting Server: " + error); });