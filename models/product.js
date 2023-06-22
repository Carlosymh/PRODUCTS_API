const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: {
        type: String,   
        require: true
    },
    category: {
        type: String,
        require: true
    },
    ubication: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    creation_date: {
        type: Date,
        default: Date.now()
    },
});

module.exports = mongoose.model('products', ProductSchema);