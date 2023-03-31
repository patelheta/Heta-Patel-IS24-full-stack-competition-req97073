const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger.json');
const { Products } = require('./Products');

// A Function to generate a random Product ID
const generateProductId = function() {
  return Math.floor(100000 + Math.random() * 900000);
};

// defining the Express app
const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

// Swagger config
app.use('/api/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Health end point 
app.get('/api/health', (req, res) => {
  res.status(200).send('Application is Healthy');
});

// End point to get all products
app.get('/api/products', (req, res) => {
  res.status(200).json(Products);
});

/**
 * Input : {
   "value":"test",
   "orderBy": "scrumMasterName" || "developer"
}
 */
// End point to search product by developer name or scrum master name
app.get('/api/products/search', (req, res) => {
  console.log(req.query);
  const inputValue = req.query.value.toLowerCase();
  const filterBy = req.query.filterBy;
  let filterProducts = [];
  if (filterBy === 'developer') {
    console.log();
    filterProducts = Products.filter(product => product['Developers'].some(name => name.toLowerCase().includes(inputValue)));
  } else if (filterBy === 'scrumMasterName') {
    filterProducts = Products.filter(product => product['scrumMasterName'].toLowerCase().includes(inputValue));
  }
  console.log(filterProducts);
  res.status(200).json(filterProducts);
});

// End point to Create new product in to all products list
app.post('/api/products', (req, res) => {
  const newProduct = req.body;
  const newProductId = generateProductId();
  newProduct['productId'] = newProductId;
  Products.push(newProduct);
  res.status(201).json('Product Created successfully');
});

// End point to Update a product
app.put('/api/products/:id', (req, res) => {
  const updateProduct = req.body;
  const productId = Number(req.params.id);
  updateProduct["productId"] = productId;
  const productIndex = Products.findIndex(product => product.productId === productId);
  if (productIndex > -1) {
    Products.splice(productIndex, 1, updateProduct);
  } else {
    return res.status(404).send('Product Not Found');
  }

  res.status(200).json('Product updated successfully');
});

// End point to delete a product 
app.delete('/api/products/:id', (req, res) => {
  const productId = Number(req.params.id);
  const productIndex = Products.findIndex(product => product.productId === productId);
  if (productIndex > -1) {
    Products.splice(productIndex, 1);
  } else {
    return res.status(404).send('Product Not Found');
  }

  res.status(200).send('Product deleted successfully');
});


// starting the server
app.listen(PORT, () => {
  console.log(`Server app listening on port ${PORT}!`);
});