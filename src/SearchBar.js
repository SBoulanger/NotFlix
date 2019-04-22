import React, { Component } from 'react';
import './SearchBar.css';
import fire from ".Firestore";

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

export default SearchBar;
