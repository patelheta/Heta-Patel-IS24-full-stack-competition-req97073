const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const Products = [
  {
    productId: '2342',
    productName: 'Map',
    productOwnerName: 'Google',
    Developers: [
      "NAME_1",
      "NAME_2",
      "NAME_3",
      "NAME_4",
      "NAME_5"
    ],
    scrumMasterName: 'TestScrum',
    startDate: "YYYY/MM/DD",
    methodology: 'Agile'
  }
];

const generateProductId = function() {
  return Math.random().toString(36).substring(2, 7);
};

// defining the Express app
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

app.get('/api/health', (req, res) => {
  res.status(200).send('Application is Healthy');
});

app.get('/api/products', (req, res) => {
  res.status(200).json(Products);
});

/**
 * Input : {
   "value":"test",
   "orderBy": "scrumMasterName" || "developer"
}
 */
app.get('/api/products/search', (req, res) => {
  const inputValue = req.body.value;
  const orderBy = req.body.orderBy;
  let filterProducts;
  if (orderBy === 'developer') {
    filterProducts = Products.filter(product => product['Developers'].includes(inputValue));
  } else if (orderBy === 'scrumMasterName') {
    filterProducts = Products.filter(product => product['scrumMasterName'].includes(inputValue));
  }
  res.status(200).json(filterProducts);
});

app.post('/api/products', (req, res) => {
  const newProduct = req.body;
  const newProductId = generateProductId();
  newProduct['productId'] = newProductId;
  Products.push(newProduct);
  res.status(201).json(newProduct);
});

app.put('/api/products/:id', (req, res) => {
  const updateProduct = req.body;
  const updateProductId = req.params.id;
  updateProduct['productId'] = updateProductId;
  const productIndex = Products.findIndex(product => product.productId === updateProductId);
  if (productIndex) {
    Products.splice(productIndex, 1, updateProduct);
  } else {
    return res.status(404).send('Product Not Found');
  }

  res.status(200).json(Products[productIndex]);
});

app.delete('/api/products/:id', (req, res) => {
  const updateProductId = req.params.id;
  const productIndex = Products.findIndex(product => product.productId === updateProductId);
  console.log(productIndex);
  if (productIndex >= 0) {
    Products.splice(productIndex, 1);
  } else {
    return res.status(404).send('Product Not Found');
  }

  res.status(200).send('Product deleted successfully');
});


// starting the server
app.listen(PORT, () => {
  console.log(`Backend app listening on port ${PORT}!`);
});