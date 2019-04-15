import React from 'react';
import './basic.css'
import NavBar from "./NavBar";
import Action_Bar from "./Action_Bar";
import Main_Movie from "./Main_Movie";

class Movie_Page extends React.Component{
    render() {
        return (
            <div>
                <NavBar />
                <Action_Bar />
                <Main_Movie movieID={this.props.movieID}/>

            </div>
        );
    }
}

export default Movie_Page