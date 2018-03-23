const express = require('express');
const router = express.Router();
const Tournaments = require('../models/tournaments.js');

// Seed Route to add db
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
		}, {
			name: 'Can-Am Rugby Tournament',
			location: 'Saranac Lake, NY',
			date: 'July 27-29',
			img: 'https://media1.popsugar-assets.com/files/thumbor/wTbxSRxW6mXVdvI8rMzKYrTXCbc/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2015/09/04/815/n/1922441/f45a6a9c1b611a81_15584819304_89e142f26f_o/i/Saranac-Lake-NY.jpg',
			competitive: true,
			social: true,
			rating: 4,
			review: "'The Can-Am Rugby Tournament and the sport of rugby in general bring us human beings all a little closer together through competition, sportsmanship and camaraderie..' -Can-Am Rugby Tournament'"
		}, {
			name: 'Pitch-A-Tent 7\'s',
			location: 'Chattanooga, TN',
			date: 'July 28-31',
			img: 'https://sophfronia.com/wp-content/uploads/2017/09/downtownchattanooga-e1504796664971.jpg',
			competitive: false,
			social: true,
			rating: 3,
			review: 'If you enjoy camping and rugby, this is the rugby tournament for you. Pitch a tent and play all weekend'
		}, {
			name: 'Maggotfest',
			location: 'Missoula, MT',
			date: 'May 19-20',
			img: 'https://i.pinimg.com/originals/2e/e8/45/2ee84535df51d867fa4b243817e84e10.jpg',
			competitive: false,
			social: true,
			rating: 4,
			review: "'Maggotfest is a world famous rugby tournament hosted by the Missoula All-Maggots Rugby Club, since 1977, in Missoula MT, USA. The emphasis at Maggotfest is on both the competition of the sport and on the social aspects of rugby. Clubs attend from all over the world, US and Canada.'-Maggotfest Rugby Tournament'"
		}, {
			name: 'Rock N\'Roll 7\'s',
			location: 'Mentor, OH',
			date: 'July 8',
			img: 'http://www.clevelandcrusadersrugby.com/wp-content/uploads/2017/05/RR7s_Header_Men1-1024x524.jpg',
			competitive: true,
			social: true,
			rating: 3,
			review: 'Rock N\'Roll 7\'s Rugby Tournament is a one day rugby tournament and festival located in Mentor, a suburb of Cleveland, Ohio.'
		}, {
			name: 'Surfside 7\'s',
			location: 'Stone Harbor, NJ',
			date: 'July 14',
			img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVSiT3FrIEEAebiVCeeQSpGDLXTQaNkDf0aFy94o-1i5EwJnzkEQ',
			competitive: true,
			social: true,
			rating: 3,
			review: 'Surfside 7\'s is a rad summer tournament located in Stone Harbor. Right by the water. YASSSSSSS.'
		}, {
			name: 'Harrisburg 7\'s',
			location: 'Harrisburg, PA',
			date: 'July 24',
			img: 'https://www.harrisburgrugby.com/wp-content/uploads/2017/07/Yellow-Back.jpg',
			competitive: true,
			social: true,
			rating: 4,
			review: 'Some have said the best 7\'s tournament on the east coast.'
		}, {
			name: 'Heineken Kinsale Rugby 7\'s',
			location: 'Kinsale, Ireland',
			date: 'May 5-6',
			img: 'https://www.kinsale7s.com/img/gallery/Kinsale%207s%20Action%20JA1_4745.jpg',
			competitive: true,
			social: true,
			rating: 5,
			review: '7\'s rugby tournament sponsored by Heineken and located in Ireland... could it possibly get any better?'
		}, {
			name: 'Brussels Rugby 7\'s',
			location: 'Brussels, Belgium',
			date: 'June 30',
			img: 'https://ur7s.com/media/thumb/5252c87ba6275/770x550_50_50.jpg',
			competitive: true,
			social: true,
			rating: 4,
			review: 'Unfortunately, the website is in French... looks pretty sick though.'
		}
	], (err, data) => {
		res.redirect('index.ejs');
	});
});

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
	Tournaments.create(req.body, (err, createdTournament) => {
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
