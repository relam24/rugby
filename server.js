const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');

// body parser needs to be above controllers
// method override
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

const tourController = require('./controllers/tournaments.js');
app.use('/tournaments', tourController);

mongoose.connect('mongodb://localhost:27017/rugbycrud');
mongoose.connection.once('open', () => {
	console.log('connected to mongo');
});
app.listen(3000, () => {
	console.log('listening');
});
