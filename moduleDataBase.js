const spicedPg = require('spiced-pg');
const dbUrl = process.env.DATABASE_URL || `postgres:${require('./secrets').dbUser}:${require('./secrets').dbPass}@localhost:5432/gallery`;
const db = spicedPg(dbUrl);
const bcrypt = require('bcryptjs');

function getNewestWorks() {
	return db.query(`SELECT * FROM new`)
	.then((result) => {
		return result.rows;
	})
	.catch((err) => {
        console.log('getNewestWorks function', err.stack);
    })
}
function getLandscapeData() {
	return db.query(`SELECT author_id, first, last, author_image, 
		categorie, technique, image, x, y, paintings.id 
		FROM authors JOIN paintings ON author_id = authors.id 
		WHERE categorie = 'Landscape'`)
	.then((result) => {
		return result.rows;
	})
	.catch((err) => {
        console.log('getLandscapeData function', err.stack);
    })					
}
function getLifeData() {
	return db.query(`SELECT author_id, first, last, author_image, 
		categorie, technique, image, x, y, paintings.id 
		FROM authors JOIN paintings ON author_id = authors.id 
		WHERE categorie = 'Everyday Life'`)
	.then((result) => {
		return result.rows;
	})
	.catch((err) => {
        console.log('getStillLifeData function', err.stack);
    })
}
function getStillLifeData() {
	return db.query(`SELECT author_id, first, last, author_image, 
		categorie, technique, image, x, y, paintings.id 
		FROM authors JOIN paintings ON author_id = authors.id 
		WHERE categorie = 'Still Life'`)
	.then((result) => {
		return result.rows;
	})
	.catch((err) => {
        console.log('getStillLifeData function', err.stack);
    })
}
function getOilData() {
	return db.query(`SELECT author_id, first, last, author_image, 
		categorie, technique, image, x, y, paintings.id 
		FROM authors JOIN paintings ON author_id = authors.id 
		WHERE technique = 'Oil'`)
	.then((result) => {
		return result.rows;
	})
	.catch((err) => {
        console.log('getWatercolorData function', err.stack);
    })
}
function getWatercolorData() {
	return db.query(`SELECT author_id, first, last, author_image, 
		categorie, technique, image, x, y, paintings.id 
		FROM authors JOIN paintings ON author_id = authors.id 
		WHERE technique = 'Watercolor'`)
	.then((result) => {
		return result.rows;
	})
	.catch((err) => {
        console.log('getWatercolorData function', err.stack);
    })
}
function getWaterPencilData() {
	return db.query(`SELECT author_id, first, last, author_image, 
			categorie, technique, image, x, y, paintings.id 
			FROM authors JOIN paintings ON author_id = authors.id 
			WHERE technique = 'Watercolor-pencil'`)
	.then((result) => {
		return result.rows;
	})
	.catch((err) => {
        console.log('getWaterPencilData function', err.stack);
    })
}
function getSinglePaint(id) {
	return db.query(`SELECT author_id, first, last, author_image, 
		categorie, technique, image, x, y, paintings.id 
		FROM authors JOIN paintings ON author_id = authors.id 
		WHERE paintings.id = $1`, [id])
	.then((result) => {
		return result.rows[0];
	})
	.catch((err) => {
        console.log('getSinglePaint function', err.stack);
    })
}
function getSingleAuthor(id) {
	return db.query(`SELECT author_id, first, last, author_image, 
		categorie, technique, image, x, y, paintings.id 
		FROM authors JOIN paintings ON author_id = authors.id 
		WHERE authors.id = $1`, [id])
	.then((result) => {
		return result.rows;
	})
	.catch((err) => {
        console.log('getSingleAuthor function', err.stack);
    })
}


exports.getNewestWorks = getNewestWorks;
exports.getLandscapeData = getLandscapeData;
exports.getWatercolorData = getWatercolorData;
exports.getStillLifeData = getStillLifeData;
exports.getLifeData = getLifeData;
exports.getOilData = getOilData;
exports.getSinglePaint = getSinglePaint;
exports.getSingleAuthor = getSingleAuthor;


//  w W /
// id: item.id
// author_id: item.author_id,
// first: item.first,
// last: item.last,
// authorImage: authorImage,
// categorie: item.categorie,
// technique: item.technique,
// images: []
// SELECT  FROM authors JOIN paintings ON author_id = authors.id WHERE paintings.id = 1;
// SELECT author_id, first, last, author_image, categorie, technique, image, paintings.id FROM authors JOIN paintings ON author_id = authors.id WHERE authors.id = 1;