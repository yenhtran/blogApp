var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

//APP CONFIG
mongoose.connect('mongodb://localhost/blog_app');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

//MONGOOSE/MODEL CONFIG
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});

var Blog = mongoose.model('blog', blogSchema);

//RESTFUL ROUTES
app.get('/', function(req, res){
    res.redirect('/blogs');
});

app.get('/blogs', function(req, res){
    res.render('index');
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log('The BlogApp Server has started!');
});