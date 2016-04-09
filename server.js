var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var app = express();

// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/basic_mongoose');

app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.get('/', function (req, res){
	res.render('index');
)};
app.post('/users', function (req, res){
	console.log('POST DATA', req.body);
	//add user here
	var user = new User({name: req.body.name, age: req.body.age})
	user.save(function (err){
		if(err){
			res.redirect('/')
			console.log('something went wrong')
		} else{
			console.log('successfully added a user')
			res.redirect('/')
		}
	})
})

var server = app.listen(3030, function (){
	console.log('its the year 3030')
})

var UserSchema = new mongoose.Schema({
	name: String,
	age: Number
})
mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
var User = mongoose.model('User'); // We are retrieving this Schema from our Models, named 'User'

