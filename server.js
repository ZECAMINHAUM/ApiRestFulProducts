const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');
const product = require('./src/models/product');

//Init the app
const app = express();
app.use(express.json());
app.use(cors());

//Connect to the database
mongoose.connect('mongodb://mongo:27017/products_data', { useNewUrlParser: true })
    .then(() => {     
        console.log('###########################################');
        console.log('connected');
        console.log('###########################################');
    })
    .catch(err => { 
        console.log('###########################################');
        console.log(err); 
        console.log('###########################################');
        process.exit(1);
    });

//import the models
requireDir('./src/models');

//Import routes
app.use('/api', require('./src/routes'));

//select the port
app.listen(9000 , () => { 
    console.log('###########################################');
    console.log('Nodejs & Express connected to the port 9000');
    console.log('###########################################');
});
