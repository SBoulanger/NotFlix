import firebase from "./Firestore";

/*
    Movie search class
    @params: keyword, searchtype, orderby, size
    keyword: a movie or genre that you are searching for
    searchtype: specifies if you are searching for a movie or a genre
    orderby: orders the query based on the request (i.e highest rated, etc...)
    size: maximum size of the query that you can pull
    
    This implementation goes by the logic that the search bar will look like
    [   keyword   ][searchtype]
    similiar to IMDb's search bar

    ** sorting will be added shortly in the future **
*/
class MovieSearch {
    constructor(keyword = "", searchtype = "", orderby = "", size = 1) {
        console.log("Searching for %s: %s", searchtype, keyword);
        if(searchtype.toLowerCase() == "title") {
            return searchTitle(keyword, orderby, size);
        }
        else if(searchtype.toLowerCase() == "genre") {
            return searchGenre(keyword, orderby, size);
        }
        else
            return ;
    }
}

/* 
    search for a title
    will fetch titles that match with the string starting from substring(0)
    i.e: "John Wick" will produce "John Wick" and "John Wick 2" as hits
    Case sensitive, user input will need to be altered to circumvent that
*/
function searchTitle(keyword, orderby, size) {
    keyword = keyword.toLowerCase();
    var moviesRef = firebase.firestore().collection('movies');
    return moviesRef.orderBy('search_title').startAt(keyword).endAt(keyword+"\uf8ff").limit(size);
}

/*
    search for a genre
    will fetch titles that include a certain genre
    ** will be changed to allow multiple genres to be searched for in the future **
    ** will also limit the possible keywords to prevent searching for movie titles **
*/
function searchGenre(keyword, orderby, size) {
    keyword = keyword.charAt(0).toUpperCase() + keyword.slice(1).toLowerCase();
    var moviesRef = firebase.firestore().collection('movies');
    return moviesRef.where('genres', "array-contains", keyword).limit(size);
}

export default MovieSearch


/* Timothy's code
    Effectively a way to simplify using queries and for easy documentation.                     Genres:                                     Methods:
    To use, start off by creating a new MovieSearch with your choice of parameters.             Action      Family      Romance             highestRating - Orders films by their
    Check to the right for the list of available parameters, method selects the                 Adventure   Fantasy     Science Fiction     average vote score going from highest to
    order the docs will be sorted by, genre selects a single genre for the query                Animation   History     Thriller            lowest
    to search, and size is the number of documents the query will pull.                         Comedy      Horror      TV Movie
                                                                                                Crime       Music       War                 newest - Orders films by their release
    Any and all three parameters can be left empty and filled by default. The                   Drama       Mystery     Western             date from newest to oldest
    default method has it sort by ID (as strings, not numbers) ascending, it matches
    the order seen on the firestore database collection. The default size is only 5
    documents to prevent accidentally using too many reads on our quota, the max
    number of films we have is 550 films. The default genre is no genre at all and
    it'll accept any film.

    Can easily add additional methods to order films, just add new case on switch
    statement, one for searches with genre parameter and one for without.

    This creates a Query object. To interface with this object, you need to access
    a QuerySnapshot you get from it using .get(). For further example look at bottom
    of class.
    Documentation found here: https://firebase.google.com/docs/reference/node/firebase.firestore.Query
    Further documentation of relevant files are QuerySnapshot and QueryDocumentSnapshot both on the
    same page on the left column.

class MovieSearch{
    constructor(orderBy = "", size = 5, genre = "none") {
        var moviesRef = firebase.firestore().collection('movies')
        if(genre == "none"){
            switch(orderBy.toLowerCase()) {
                case "highestRating":
                    return moviesRef.orderBy('vote_average', 'desc').limit(size)
                    break;
                case "newest":
                    return moviesRef.orderBy('release_date', 'desc').limit(size)
                    break;
                default:
                    return moviesRef.limit(size);
            }
        }
        else{
            genre = genre.charAt(0).toUpperCase() + genre.slice(1).toLowerCase();
            switch(orderBy.toLowerCase()) {
                case "highestRating":
                    return moviesRef.where('genres', "array-contains", genre)
                        .orderBy('vote_average', 'desc').limit(size)
                    break;
                case "newest":
                    return moviesRef.where('genres', "array-contains", genre)
                        .orderBy('release_date', 'desc').limit(size)
                    break;
                default:
                    return moviesRef.where('genres', "array-contains", genre).limit(size)
            }
        }
    }
} 
*/

/*
    Example usage of program
    var queryRef = new MovieSearch("all", 5, "Adventure");
    var getMovie = queryRef.get()
        .then(query => {
            if (query.empty) {
                //do nothing
                console.log("nothing found");
            }
            else {
                query.docs.forEach(doc => {
                    if(doc.exists){
                        //Do stuff like
                        var test = doc.data().popularity;
                        //Note this is a snapshot of the document data
                        //therefore it's a read only copy of the data.
                        //To modify the data you need to do something
                        //like:
                          firebase.firestore().collection('movies').doc(doc.id).update({popularity: popularity + 1});

                    }
                    else{
                        //do nothing
                        console.log("document doesn't exist");
                    }
                })
            }
        });
*/