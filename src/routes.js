const express = require('express');
const routes = express.Router();

const Products = require('./controllers/ProductController');


//Route for get Products 
routes.get('/products', Products.index);
//Route for get details from product
routes.get('/products/show/:id', Products.show);
//Route for create product 
routes.post('/products/create', Products.store);
//Route for update a product
routes.put('/products/update/:id', Products.update);
//Route for delete a product 
routes.delete('/products/delete/:id', Products.destroy);

module.exports = routes;