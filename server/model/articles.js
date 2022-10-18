const { default: mongoose } = require("mongoose");

const ArticleSchema = new mongoose.Schema({
    Author: {
        firstName: {
            required: true,
            type: String
        },
        lastName: {
            required: true,
            type: String
        }
    },
    Publication: {
        title: {
            required: true,
            type: String
        },
        story: {
            required: true,
            type: String
        },
        tags: [],
        datePublished: {
            type: Date,
            default: Date.now
        },
        currency: String,
        inStock: Boolean,
        price: { type: Number, required: false }
    }
})

module.exports = mongoose.model('Articles', ArticleSchema)