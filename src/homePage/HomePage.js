import React from 'react';
import NavBar from "../components/NavBar";
import { withRouter } from 'react-router-dom';
import TopDisplay from "./TopDisplay";
import GenreDisplay from "./GenreDisplay";

class HomePage extends React.Component{
    render() {
        return (
            <div>
                <NavBar/>
                <TopDisplay/>
                <GenreDisplay numMov={10} genre={'Action'}/>
                <GenreDisplay numMov={10} genre={'Comedy'}/>
            </div>
        );
    }
}
export default withRouter(HomePage)