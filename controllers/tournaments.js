const express = require('express');
const router = express.Router();
const Tournaments = require('../models/tournaments.js');

// seed route to add into db easily
router.get('/seed', (req, res) => {
	res.send('seed');
});

// index
router.get('/', (req, res) => {
	res.render('index.ejs');
});

// new route
router.get('/new', (req, res) => {
	res.render('new.ejs');
});

// show route--must be under new
router.get('/:id', (req, res) => {
	res.render('show.ejs');
});

// edit route--can go anywhere
router.get('/:id/edit', (req, res) => {
	res.render('edit.ejs');
});

module.exports = router;
