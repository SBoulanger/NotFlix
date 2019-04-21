import React, { Component } from 'react';
import './NavBar.css';
import NotflixLogo from '../imgs/Notflix.png';
import Cookie from '../libraries/Cookie';
import Modal from './Modal'

class NavBar extends React.Component {

    constructor(props) {
        super(props);

        // How to create State variables
        this.state = {
            status : "",
            show : false
        };
    }

    //functions to hide/show the modal
    showModal = () => {this.setState({show: true})}
    hideModal = () => {this.setState({show: false})}




    render() {
        var myCookie = Cookie;
        if(myCookie.exists()){
          this.state.status = "You are LoggedIn"
        } else {
          this.state.status = "Please, login"
        }
        return (
            <div className="ui-header">
                <a className="logo" href="#logo">
                    <img className="logo" src={NotflixLogo} height={70} alt="this is wack"/>
                </a>

                <a className="home" href="/#home">Home</a>
                <a className="profile" href="/#profile">Profile</a>
                <input href="#search" className="search-bar" type="text" placeholder="Search Movies and TV..."></input>
                {this.state.show ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }
                <button className="open-modal-btn" onClick={this.showModal}>{this.state.status}</button>

                <Modal className="modal" show={this.state.show} close={this.hideModal}>
                  <p> {this.state.status}</p>
                  <p> Logout stuff here </p>
                </Modal>
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
