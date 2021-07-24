const express = require('express');
require('dotenv').config();
var cors = require('cors')

const port = 5000;
const app = express();

app.use(cors());
app.use(express.json());

const adminRoute = require('./routes/admin');
const newsRoute = require('./routes/newsData');
const booksFormRoute = require('./routes/booksform');

app.use('/admin', adminRoute);
app.use('/news', newsRoute);
app.use('/books', booksFormRoute);

app.listen(port, () => {
    console.log('Server started at ' + port);
});

app.get('/', (req, res) => {
    res.send('Hola');
});