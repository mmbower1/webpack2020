const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const cors = require('cors');
const dotenv = require('dotenv');
// load env vars. this goes before route files so mapquest api works
dotenv.config({ path: './config/config.env' });
const path = require('path');
const port = process.env.PORT || 5000;

// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
connectDB();

if (process.env.NODE_ENV != 'production') {
    require('dotenv').config()
}

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
    })
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// allows to make requests to server
app.use(cors());

app.use('/api/users', require('./routes/api/users'));

app.listen(port, err => {
    if (err) throw err;
    console.log(' ');
    console.log('>> webpack2020 Server running on port ' + port);
});