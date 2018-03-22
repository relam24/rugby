const express = require('express');
const router = express.Router();
const Tournaments = require('../models/tournaments.js');

// seed route to add into db easily
router.get('/seed', (req, res) => {
	Tournaments.create([
		{
			name: 'Savannah Rugby Tournament',
			location: 'Savannah, GA',
			date: 'March 10-11',
			img: 'https://img-aws.ehowcdn.com/877x500p/s3-us-west-1.amazonaws.com/contentlab.studiod/getty/96de12886e8f4e08b8c5ba221d237ce1',
			competitive: true,
			social: true,
			rating: 5,
			review: 'Savannah is one of most fun tournaments around the states. In close proximity to historical River Street, there are tons of great restaurants and bars as well. '
		}, {
			name: 'Nash Bash',
			location: 'Nashville, TN',
			date: 'March 24-25',
			img: 'https://cdn4.sportngin.com/attachments/photo/9196/3762/NashBash_FBCover_2018_large.jpg',
			competitive: true,
			social: true,
			rating: 3,
			review: 'Nash Bash is located in Nashville, TN. Definitely more of a social tournament although there are a lot of competitive teams. '
		}, {
			name: 'Warsaw Rugby Festival',
			location: 'Warsaw, Poland',
			date: 'May 25-27',
			img: 'https://scontent-ort2-2.xx.fbcdn.net/v/t31.0-8/18814784_1397256417021725_5028973434196868173_o.jpg?oh=3af0621cd8e4af0dec19de16daba0304&oe=5B2CD91F',
			competitive: false,
			social: true,
			rating: 5,
			review: "Warsaw Rugby Festival is an international tournament based in Warsaw, Poland. Its tagline is 'Pure.Social.Rugby Since 1997' and judging by the slip n' slide in the try zone...that is exactly what it is."
		}
	]);
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
