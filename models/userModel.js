const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    login: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['buyer', 'seller'],
        default: 'buyer',
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
