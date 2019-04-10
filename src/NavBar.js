import React, { Component } from 'react';
import './NavBar.css';
import NotflixLogo from './imgs/Notflix.png';

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
                <a className="profile" href="/#profile">Profile</a>
                <input href="#search" className="search-bar" type="text" placeholder="Search Movies and TV..."></input>

            </div>
        )
    }

    render_wip() {
        return (
            <div>
                <ul id="stats">
                    <li>
                        <a href="#logo">
                            <span className="listHeader">
                                <img src={NotflixLogo} height={50}/>
                            </span>
                        </a>
                    </li>
                    <li><a href="#home"><span className="listHeader">67</span></a></li>
                    <li><a href="#blank"><span className="listHeader">67</span></a></li>
                    <li><a href="#search"><span className="listHeader">67</span></a></li>
                    <li><a href="#profile"><span className="listHeader">67</span></a></li>
                </ul>
            </div>
        )
    }
}

export default NavBar;