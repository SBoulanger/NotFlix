import React, { Component } from 'react';
import './SearchBar.css';
import fire from "../libraries/Firestore";
import MovieSearch from "../libraries/MovieSearch";

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            desc: "",
            rating: "",
        };
    }

    render() {
        return (
            <div className="ui-header">
            
            </div>
        )
    }

    render_wip() {
        return (
            <div className="ui-header">

                <input href="#search" className="search-bar" type="Text" placeholder="Search Movies"></input>

            </div>
        )
    }
}

/* 
    testing the MovieSearch library
    everything is on console at the moment.

*/
var queryRef = new MovieSearch("John", "title", "", 5);
var getMovie = queryRef.get().then(query => {
        if (query.empty) {
            // empty query = no movies found
            console.log("No hits found.");
        }
        else {
            query.docs.forEach(doc => {
                    if(doc.exists){
                        // show movie data
                        console.log('Document data:', doc.data());
                        console.log("Found a hit.");

                    }
                    else{
                        //do nothing
                        console.log("document doesn't exist");
                    }
            })
        }
}); 

export default SearchBar;
