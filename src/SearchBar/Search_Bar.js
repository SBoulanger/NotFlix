import React, { Component } from 'react';
import './SearchBar.css';
import fire from "../libraries/Firestore";
import MovieSearch from "../libraries/MovieSearch";

// possible movie genres. currently unused array
var movieGenres = ["Action", "Family", "Romance", "Adventure", "Fantasy", "Science Fiction", 
                   "Animation", "History", "Thriller", "Comedy", "Horror", "TV Movie", "Crime", 
                   "Music", "War", "Drama", "Mystery", "Western"];

class Search_Bar extends React.Component {

    constructor() {
        super();
        this.changeHandler = this.changeHandler.bind(this);
    }

    /*
    	when the handler detects a space it will search for whatever is in the text field
    	NOT the final product, just a stopgap until frontend can deliver a button function
    */
    changeHandler(e) {
        var keyword = e.target.value;
        var searchType = "title";
        if(keyword.charAt(keyword.length - 1) == " ") {
        	// *************** for testing *******************************************
        	if(searchType == "genre")
        		keyword = keyword.substring(0, keyword.length - 1);
        	//***************remove later***************************
            var queryRef = new MovieSearch(keyword, searchType, "", 2);
            var getMovie = queryRef.get();
            getMovie.then(query => {
                if (query.empty) {
                    // empty query = no movies found
                    console.log("No hits found.");
                }
                else {
                    query.docs.forEach(doc => 
                    {
                        if(doc.exists) {
                            // show movie data
                            console.log("Document data:", doc.data());
                            console.log("Found a hit.");
                        }
                        else {
                            //do nothing
                            console.log("Document doesn't exist.");
                        }
                    })
                }
            }); 
        }
    }

    render() {
        return (
            <div className="ui-header">
                <input 
                    className="search-bar" 
                    type="Text" 
                    onChange={this.changeHandler}
                    placeholder="Enter the 1st word of a title and a space to search."
                />
            </div>
        )
    }
}

export default Search_Bar;
