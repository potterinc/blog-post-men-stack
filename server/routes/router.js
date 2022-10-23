const express = require('express')
const router = express.Router()
const Articles = require('../model/articles')
router
	.get('/', async (req, res) => {
		try {
			const publishedArticles = await Articles.find()
			res.status(200).render('articles', {
				publications: publishedArticles
			})
		}
		catch (e) {
			res.status(500).json({ message: e.message })
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
			message: "Article Published",
		})
	} catch (e) {
		res.status(400).json({ message: e.message })
	}
})

router
	.route('/view/:id')
	.get(async (req, res) => {
		// Get articles with id
		try {
			const singleArticle = await Articles.find({ _id: req.params.id })
			res.status(200).render('single', {
				single: singleArticle
			})
		} catch (e) {
			res.status(500).json({message: e.message})
		}
	})
	.put((req, res) => {
		// Update articles with id
	})
	.delete((req, res) => {
		// Delete articles with id
	})

module.exports = router