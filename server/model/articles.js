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
        tags: [String],
        datePublished: {
            type: Date,
            default: new Date().toDateString()
        }
    }
})

module.exports = mongoose.model('Articles', ArticleSchema)