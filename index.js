const toS3 = require('./toS3.js');
const config = require('./config.json');
const host = config.s3Url;
const uploader = require('./uploader.js').uploader;
const passModule = require('./passModule.js');
const db = require('./moduleDataBase.js');
const dbQuery = require('./dbQuery.js')
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
	.then((paintLandscape) => {
		res.json({
			landscapeData: dbQuery(paintLandscape)
		})
	})
	.catch((err) => {
        console.log('app.get(/paint-landscape)', err.stack);
    }) 
})

app.get('/paint-still-life', function(req, res) {
	console.log('INSIDE')
	db.getStillLifeData()
	.then((paintStillLife) => {
		console.log('paintStillLife', paintStillLife)
		res.json({
			stillLifeData: dbQuery(paintStillLife)
		})

	})
	.catch((err) => {
        console.log('app.get(/paint-still-life)', err.stack);
    }) 
})
app.get('/paint-everyday-life', function(req, res) {
	db.getLifeData()
	.then((paintLife) => {
		console.log('paintStillLife', paintLife)
		res.json({
			lifeData: dbQuery(paintLife)
		})
	})
	.catch((err) => {
        console.log('app.get(/paint-still-life)', err.stack);
    }) 
})
app.get('/paint-watercolor', function(req, res) {
	db.getWatercolorData()
	.then((paintWatercolor) => {
		res.json({
			watercolorData: dbQuery(paintWatercolor)
		})
	})
	.catch((err) => {
        console.log('app.get(/paint-watercolor)', err.stack);
    }) 
})
app.get('/paint-oil', function(req, res) {
	db.getOilData()
	.then((paintOil) => {
		res.json({
			oilData: dbQuery(paintOil)
		})
	})
	.catch((err) => {
        console.log('app.get(/paint-oil)', err.stack);
    }) 
})
app.get('/paint-water-pencil', function(req, res) {
	db.getWaterPencilData()
	.then((paintWaterPencil) => {
		res.json({
			waterPencil: dbQuery(paintWaterPencil)
		})
	})
	.catch((err) => {
        console.log('app.get(/paint-water-pencil)', err.stack);
    }) 
})
app.get('/single-paint/:id', function(req, res) {
	db.getSinglePaint(req.params.id)
	.then((singlePaintData) => {
		// console.log('singlePaintData', singlePaintData)
		singlePaintData.image = host + singlePaintData.image;
		singlePaintData.author_image = host + singlePaintData.author_image;
		res.json({
			singlePaint: singlePaintData
		})
	})
	.catch((err) => {
        console.log('app.get(/single-paint)', err.stack);
    }) 
})


app.get('*', function(req, res) {
    res.sendFile(__dirname + '/index.html');
})

server.listen(8080, function() {
    console.log("I'm listening.");
});



//  w W /