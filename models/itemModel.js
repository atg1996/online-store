const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    images: {
        type: [String],
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        ref: 'Category',
        required: true,
    },
    tags: {
        type: [String],
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    availableCount: {
        type: Number,
        required: true,
    },
    seller: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Item', itemSchema);
