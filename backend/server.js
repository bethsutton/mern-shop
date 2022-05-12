const express = require('express');
const products = require('./data/products');

const app = express();

app.get('/', (req, res) => {
	res.send('API is running...');
});

// Get products
app.get('/api/products', (req, res) => {
	res.json(products);
});

// Get single product by id
app.get('/api/products/:id', (req, res) => {
	const product = products.find((p) => p._id === req.params.id);
	res.json(product);
});

app.listen(8000, console.log('Server running on port 8000'));