import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import NotflixLogo from './Notflix.png';

class NavBar extends React.Component {

    constructor(props) {
        super(props);

        // How to create State variables
        this.state = {
            var1: "",
            var2: 0,
            etc: ""
        };
    }

    render() {
        return (
            <div className="ui-header">
                <a className="logo" href="#logo">
                    <img className="logo" src={NotflixLogo} height={70} alt="this is wack"/>
                </a>

                <a className="home" href="/#home">Home</a>
                <div className="spacer"></div>
                <input href="#search" className="search-bar" type="text" placeholder="Search Movies and TV..."></input>
                <a className="profile" href="/#profile">Profile</a>
            </div>
        )
    }
}

export default NavBar;
