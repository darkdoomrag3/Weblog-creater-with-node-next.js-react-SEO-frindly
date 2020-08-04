const mongoose = require('mongoose');
const crypto = require('crypto');

const categorySchema = new mongoose.Schema(
    {

        name: {
            type: String,
            trim: true,
            required: true,
            max: 32
        },
        salt: {
            type: String,

            unique: true,
            index: true
        },
    },
    { timestamp: true }
);


module.exports = mongoose.model('Category', categorySchema)
