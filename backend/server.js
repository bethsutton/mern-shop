import express from 'express';
import dotenv from 'dotenv';
import products from './data/products.js';
import connectDB from './config/db.js';
import colors from 'colors';

dotenv.config();
connectDB();

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

const PORT = process.env.PORT || 8000;

app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} on port ${PORT}`.magenta.bold
	)
);
