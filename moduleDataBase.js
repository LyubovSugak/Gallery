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
	return db.query(`SELECT * FROM authors JOIN paintings 
					ON author_id = authors.id WHERE categorie = 'landscape'`)
	.then((result) => {
		return result.rows;
	})
	.catch((err) => {
        console.log('getLandscapeData function', err.stack);
    })
					
}

exports.getNewestWorks = getNewestWorks;
exports.getLandscapeData = getLandscapeData;

