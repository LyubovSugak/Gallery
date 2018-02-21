const config = require('./config.json');
const host = config.s3Url;

module.exports = function dbQuery(list) {
	var  dataByAuthorId = {};
	var finalList = [];
	list.forEach(item => {
		if (!dataByAuthorId[item.author_id]) {
			var authorImage = host + item.author_image;
			dataByAuthorId[item.author_id] = {
				id: item.id,
				authorId: item.author_id,
				first: item.first,
				last: item.last,
				authorImage: authorImage,
				categorie: item.categorie,
				technique: item.technique,
				x: item.x,
				y: item.y,
				images: []
			}
		}
		var image = host + item.image;
		dataByAuthorId[item.author_id].images.push({
			id: item.id,
			image: image
		})	
	})
	for (var id in dataByAuthorId) {
	    finalList.push(dataByAuthorId[id])
	}
	return finalList;
}