const express = require('express');
const BDConect = require('./config/bd');
const cors = require('cors');

// Crear el servidor 
const app = express();

// conectar a la BD 
BDConect();

app.use(cors());

app.use(express.json());

app.use('/api/products', require('./ruotes/product'));
app.use('/api/annexes', require('./ruotes/annexes'));
app.use('/api/images', require('./ruotes/images'));
app.use('/api/inventory', require('./ruotes/inventory'));
app.use('/api/invoice', require('./ruotes/invoice'));
app.use('/api/orders', require('./ruotes/orders'));
app.use('/api/login', require('./ruotes/login'));


app.listen(4000, () => {
}); 