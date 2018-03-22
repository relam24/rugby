const mongoose = require('mongoose');
const tourSchema = new mongoose.Schema({
	name: {type: String, required: true},
	location: {type: String,
		required: true},
	date: {type: String,
		required: true},
	img: {type: String},
	competitive: Boolean,
	social: Boolean,
	rating: Number,
	review: String
});

// collection
const Tournaments = mongoose.model('Tournaments', tourSchema);

module.exports = Tournaments;
