import React from 'react';
import NavBar from "../components/NavBar";
import { withRouter } from 'react-router-dom';
import TopDisplay from "./TopDisplay";
import MultiMovieCarousel from "./MultimovieCarousel";

class HomePage extends React.Component{
    render() {
        return (
            <div>
                <NavBar/>
                <TopDisplay/>
                <MultiMovieCarousel/>
            </div>
        );
    }
}
export default withRouter(HomePage)