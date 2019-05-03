import React, { Component } from 'react';
import './SearchBar.css';
import fire from "../libraries/Firestore";
import MovieSearch from "../libraries/MovieSearch";

var keyword = "";

class Search_Bar extends React.Component {

    constructor() {
        super();
        this.changeHandler = this.changeHandler.bind(this);
        this.buttonClicked = this.buttonClicked.bind(this);
    }

    buttonClicked(e) {
        if(keyword != "") {
            var queryRef = new MovieSearch(keyword, "title", "", 2);
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

    changeHandler(e) {
        keyword = e.target.value;
    }

    render() {
        return (
            <div className="ui-header">
                <input 
                    href="#search" 
                    className="search-bar" 
                    type="Text" 
                    onChange={this.changeHandler}
                    placeholder="Search..."
                />
                <button 
                    href="#search"
                    onClick={this.buttonClicked}
                    className="search_button">Search</button>
                
            </div>
        )
    }
}

export default Search_Bar;
