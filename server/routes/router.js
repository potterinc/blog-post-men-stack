const express = require('express')
const router = express.Router()
const Articles = require('../model/articles')
router
	.get('/', async (req, res) => {
		try {
			const publishedArticles = await Articles.find()
			res.render('articles.ejs', {
				publications: publishedArticles
			})
			res.status(200)
		}
		catch (e) {
			res.status(500).json({ msg: e.message })
		}
	});
router.post('/', async (req, res) => {
	const pub = new Articles({
		Author: {
			firstName: req.body.firstName,
			lastName: req.body.lastName
		},
		Publication: {
			title: req.body.title,
			story: req.body.story,
			tags: req.body.tags
		}
	})
	try {
		const newPub = await pub.save()
		res.status(201).json({
			message: "Added new Article",
		})
	} catch (e) {
		res.status(400).json({ msg: e.message })
	}
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