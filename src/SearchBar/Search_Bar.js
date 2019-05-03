import React, { Component } from 'react';
import './SearchBar.css';
import fire from "../libraries/Firestore";
import MovieSearch from "../libraries/MovieSearch";

var keyword = "";
var searchType = "Title";

class Search_Bar extends React.Component {

    constructor() {
        super();
        this.keywordHandler = this.keywordHandler.bind(this);
        this.searchButton = this.searchButton.bind(this);
        this.typeButton = this.typeButton.bind(this);
    }

    keywordHandler(e) {
        keyword = e.target.value;
    }

    searchButton(e) {
        if(keyword != "") {
            var queryRef = new MovieSearch(keyword, searchType, "", 2);
            var getMovie = queryRef.get().then(query => {
                if (query.empty) {
                    // empty query = no movies found
                    console.log("No hits found.");
                }
                else {
                    query.docs.forEach(doc => 
                    {
                        if(doc.exists) {
                            // show movie data
                            console.log('Document data:', doc.data());
                            console.log("Found a hit.");
                        }
                        else {
                            //do nothing
                            console.log("document doesn't exist");
                        }
                    })
                }
            });
        }
    }

    typeButton(e) {
        if(searchType == "Title")
            searchType = "Genre";
        else if(searchType == "Genre")
            searchType = "Title";
        document.getElementById("typeB").childNodes[0].nodeValue = searchType;
    }

    render() {
        return (
            <div className="ui-header">
                <input 
                    href="#keyword" 
                    className="search-bar" 
                    type="Text" 
                    onChange={this.keywordHandler}
                    placeholder="Search..."
                />
                <button 
                    type = "button"
                    id = "typeB"
                    onClick={this.typeButton}
                    className="type-button">
                    Title 
                </button>
                <button 
                    href="#search button"
                    type = "button"
                    onClick={this.searchButton}
                    className="search-button">
                    Search
                </button>            
            </div>
        )
    }
}

export default Search_Bar;
