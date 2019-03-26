
// term is the search term
// type is the type that the term should be associated with
function search(term, type) {
	var results = [];
	var genres = ["action", "drama", "comedy"];
	var titles = ["Spiderman", "Taken 2", "John Wick"];
	if(type == "genre")
		for(let i in genres)
			if(genre[i] == term)
				results.push(genre[i]);
	else if(type == "titles")
		for(let i in titles)
			if(titles[i] == term)
				results.push(titles[i]);
	return results;
}