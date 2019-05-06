import React, { Component } from 'react';
import './NavBar.css';
import fire from "../libraries/Firestore";
import MovieSearch from "../libraries/MovieSearch";

var keyword = "";
var searchType = "Title";

class Search_Bar extends React.Component {

    constructor(props) {
        super(props);
        this.keywordHandler = this.keywordHandler.bind(this);
        this.searchButton = this.searchButton.bind(this);
        this.typeButton = this.typeButton.bind(this);
        this.state = {results: []};
    }

    keywordHandler(e) {
        keyword = e.target.value;
    }

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
