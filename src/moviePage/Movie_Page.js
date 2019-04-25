import React from 'react';
import '../basic.css'
import NavBar from "../components/NavBar";
import Action_Bar from "../components/Action_Bar";
import { withRouter } from 'react-router-dom';
import Main_Movie from "./Main_Movie";

class MoviePage extends React.Component{
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

export default withRouter(MoviePage)
