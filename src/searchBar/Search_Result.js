import React, { Component } from 'react';
import fire from "../libraries/Firestore";
import MovieSearch from "../libraries/MovieSearch";
import NavBar from "../components/NavBar";
import Action_Bar from "../components/Action_Bar";
import Search_Bar from "./Search_Bar"

class Search_Result extends React.Component {
    render() {
        return (
            <div>
            <NavBar />
            <Action_Bar />
            <Search_Bar />
            </div>
        )
    }

}

export default Search_Result;
