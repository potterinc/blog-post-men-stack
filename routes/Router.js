const express = require('express')
const router = express.Router()

router
	.get('/', (req, res) => {
		res.render('articles.ejs')
	})
	.post('/', (req, res) => {

	})

router
	.route('/:id')
	.get((req, res) => {
		// Get articles with id
	})
	.put((req, res) => {
		// Update articles with id
	})
	.delete((req, res) => {
		// Delete articles with id
	})

module.exports = router