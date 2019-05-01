import React from "react";
import { withRouter } from 'react-router-dom';
import Movieimg from "./Movieimg";
import Movie_Page_Text from "./Movie_Page_Text";
import Rating from "../components/Rating";
import '../basic.css'

class MainMovie extends React.Component{
    render() {
        return (
            <div className = "mainmovie">
                <div className ="mainmovieimg"><Movieimg /></div>
                <div className="mainmovietext"> <Movie_Page_Text movieID={this.props.movieID}/></div>
                <div className="mainmovierating"><Rating /></div>
            </div>
        );
    }
}

export default MainMovie
