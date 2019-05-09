import React, { Component } from 'react';
import './NavBar.css';
import fire from "../libraries/Firestore";
import MovieSearch from "../libraries/MovieSearch";

/*
    vars for temp storage
    keyword is what user is searching for
    searchType is the category that user will search the 
    keyword in. Possible categories: Title , Genre
*/
var keyword = "";
var searchType = "Title";

/*
    Search Bar class.
    Usage: [      keyword     ] [searchType] [Search Button]
    User enters in query in keyword field.
    User can switch between searching for movie Titles or Genre by clicking 
    on the searchType button.
    System preforms search when the Search Button is clicked
*/
class Search_Bar extends React.Component {

    constructor(props) {
        super(props);
        this.keywordHandler = this.keywordHandler.bind(this);
        this.searchButton = this.searchButton.bind(this);
        this.typeButton = this.typeButton.bind(this);
        this.state = {results: []};
    }

    /*
        continuously updates the keyword var with whatever is in
        the keyword text field
        @param e is whatever change is detected in the text field
    */
    keywordHandler(e) {
        keyword = e.target.value;
    }

    /*
        [Search Button]
        Will search for keyword within the specified searchType
        If results are found the Title of Movies will and their tag lines 
        will be displayed under the search bar.
        If no results are found a prompt that tells the user that no results were
        found will be displayed under the search bar.
        @param e is the event of a click
    */
    searchButton(e) {
        if(keyword != "") {
            var queryRef = new MovieSearch(searchType, 2, keyword);
            this.setState({
              results: []
            });
            var getMovie = queryRef.get().then(query => {
                if (query.empty) {
                    // empty query = no movies found
                    var emptyArray = this.state.results.slice();
                    emptyArray.push(
                      <tr>
                        <td>No results found for {keyword}, searching for {searchType}.</td>
                      </tr>
                    );
                    this.setState({
                      results:emptyArray
                    });
                }
                else {
                    query.docs.forEach(doc =>
                    {
                        if(doc.exists) {
                            //use doc.data().title to get title
                            var title = doc.data().title;
                            var tagline = doc.data().tagline;
                            var space = " - "
                            var id = doc.data().id;
                            var v1 = title.concat(space).concat(tagline);
                            var url = "/movie/".concat(id)
                            var newArray = this.state.results.slice();
                            newArray.push(
                              <tr>
                                <a href={url}>{v1}</a>
                              </tr>
                            );
                            this.setState({
                              results:newArray
                            });
                        }
                        else {
                            //do nothing
                            console.log("Error: Document doesn't exist");
                        }
                    })
                }
            });
        }
    }

    /*
        [ searchType ]
        This button will specify the category that the search will look for.
        Only "Title" and "Genre" are availiable.
        Clicking on the button will switch between categories.
        @param e is the event of a click
    */
    typeButton(e) {
        if(searchType == "Title")
            searchType = "Genre";
        else if(searchType == "Genre")
            searchType = "Title";
        document.getElementById("typeB").childNodes[0].nodeValue = searchType;
    }

    render() {
        return (
            <div> 
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
                <div id="searchRes">
                    <table>{this.state.results}</table>
                </div>        
            </div>
        )
    }
}

export default Search_Bar;
