const express = require('express')
const router = express.Router()
const Articles = require('../model/articles')
const db = require('../db/conn')

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
	})
	.post('/', async (req, res) => {
		const pub = new Articles({
			Author: {
				firstName: 'Andrew',
				lastName: 'Wommack'
			},
			Publication: {
				title: 'You\'ve Already Got It!',
				story: 'Quite Trying to Get It',
				tags: ['Religous','Christian', 'Motivational'],
				price: 2000,
				currency: 'EUR',
				inStock:true
			}
		})
		try {
			const newPub = await pub.save(pub)
			res.status(201).json({ msg: 'recorded' })
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