RugbyTour

PROJECT: RugbyTour Live Site: https://rugbytour.herokuapp.com/tournaments SUMMARY/DESCRIPTION: The RugbyTour application allows users to collect a list of all rugby tournaments within the states and abroad with each tournaments' location, date, and whether or not it is competitive or social event.

APPROACH: Technologies Used: Node.js, MongodDB, Mongoose, Express, EJS, Skeleton, and CSS. Used all 7 restful routes within a MVC Structure. I originally wanted to build a rugby app that was more predominately focused on which teams are in what city, with a separate tab for tournaments. However, I thought a bit more into it and I liked the idea of people being able to come onto the site and add tournaments themselves. I really liked the idea of keeping it super simple, and with the pictures being kind of out there and not really uniform, the simple css layout helps balance it out.

UNSOLVED PROBLEMS: As I said earlier, I do definitely want to create another model for teams that is geared towards their attendance in different tournaments. That way if a team is attending a tournament and needs players of certain positions, these users can communicate with each other on the RugbyTour platform instead of having to search on facebook. I plan on going back and making the team model a bit more robust than the tournaments' model.

I had a very good time making this project! It felt like making the routes and MVC structure was fairly easy, my issue definitely came in on the CSS. Skeleton made it a bit easier to have a foundation and add some of my own CSS. Looking forward to adding some more functionality to this app.

Code Snippet --- Tournaments Controller

const express = require('express');
const router = express.Router();
const Tournaments = require('../models/tournaments.js');

// Index
router.get('/', (req, res) => {
	Tournaments.find({}, (err, allTournaments) => {
		res.render('index.ejs', {
			Tournaments: allTournaments
		});
	});
});

// new route
router.get('/new', (req, res) => {
	res.render('new.ejs');
});

// show route--must be under new
router.get('/:id', (req, res) => {
	Tournaments.findById(req.params.id, (err, foundTournament) => {
		res.render('show.ejs', {
			Tournaments: foundTournament
		});
	});
});

// CREATE post from New
router.post('/', (req, res) => {
	if (req.body.competitive === 'on') {
		req.body.competitive = true;
	} else {
		req.body.competitive = false;
	}
	if (req.body.social === 'on') {
		req.body.social = true;
	} else {
		req.body.social = false;
	}
	Tournaments.create(req.body, (err, createdTournament) => {
		console.log(req.body);
		res.redirect('/tournaments');
	});
});

// delete route
router.delete('/:id', (req, res) => {
	Tournaments.findByIdAndRemove(req.params.id, (err, data) => {
		res.redirect('/tournaments');
	});
});

// edit route--can go anywhere
router.get('/:id/edit', (req, res) => {
	Tournaments.findById(req.params.id, (err, foundTournament) => {
		res.render('edit.ejs', {
			Tournaments: foundTournament
		});
	});
});

// put update route for edit page
router.put('/:id', (req, res) => {
	if (req.body.competitive === 'on') {
		req.body.competitive = true;
	} else {
		req.body.competitive = false;
	}
	if (req.body.social === 'on') {
		req.body.social = true;
	} else {
		req.body.social = false;
	}
	Tournaments.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updateModel) => {
		res.redirect('/tournaments');
	});
});

module.exports = router;
