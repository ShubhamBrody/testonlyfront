const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
var cors = require('cors')

const port = 5000;
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true },
 {useUnifiedTopology: true });

const adminRoute = require('./routes/admin');
const homeRoute = require('./routes/homedata');

app.use('/admin', adminRoute);
app.use('/home', homeRoute);

app.listen(port, () => {
    console.log('Server started at ' + port);
});

app.get('/', (req, res) => {
    res.send('Hola');
});
