const toS3 = require('./toS3.js');
const config = require('./config.json');
const host = config.s3Url;
const uploader = require('./uploader.js').uploader;
const passModule = require('./passModule.js');
const db = require('./moduleDataBase.js');
const express = require('express');
const app = express();
const server = require('http').Server(app);
const bodyParser = require('body-parser');
const compression = require('compression');
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(compression());
app.use(express.static('public'));
app.use('/static', express.static(__dirname + '/public'));

if (process.env.NODE_ENV != 'production') {
    app.use(
        '/bundle.js',
        require('http-proxy-middleware')({
            target: 'http://localhost:8081/'
        })
    );
} else {
    app.use('/bundle.js', (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
})

app.get('/newest-works', function(req, res) {
	db.getNewestWorks()
	.then((listNewestWorks) => {
		for (var i = 0; i < listNewestWorks.length; i++) {
			listNewestWorks[i].image = listNewestWorks[i].image ? host + listNewestWorks[i].image : null;
		}
		res.json({
			listNewestWorks: listNewestWorks
		})
	})
	.catch((err) => {
        console.log('app.get(/newest-works)', err.stack);
    }) 
})

app.get('/paint-landscape', function(req,res) {
	db.getLandscapeData()
	.then((paintLandscapeData) => {
		var  singleAuthor = {};
		var authors = [];
		var paintings = [];

		paintLandscapeData.forEach(item => {
			landscapePaintings.push(item.image)
			landscapeData = {
				authorImage: item.author_image,
				first: item.first,
				last: item.last,
				listOfPaintings: landscapePaintings
			}
		})

		console.log('LANDSCAPE', landscapeData)
	})
	.catch((err) => {
        console.log('app.get(/paint-landscape)', err.stack);
    }) 
})

server.listen(8080, function() {
    console.log("I'm listening.");
});


//  w W /