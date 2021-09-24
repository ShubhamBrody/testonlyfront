const express = require('express');
require('dotenv').config();
var cors = require('cors')

const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

const adminRoute = require('./routes/admin');
const newsRoute = require('./routes/newsData');
const booksFormRoute = require('./routes/booksform');
const fundsFormRoute = require('./routes/fundraisingform');
const devicedonationRoute = require('./routes/devicedonationform');
const eventsRoute = require('./routes/events');


app.use('/admin', adminRoute);
app.use('/news', newsRoute);
app.use('/books', booksFormRoute);
app.use('/fundraising', fundsFormRoute);
app.use('/devicedonation', devicedonationRoute);
app.use('/events', eventsRoute);

app.listen(port, () => {
    console.log('Server started at ' + port);
});

app.get('/', (req, res) => {
    res.send('Hola');
});