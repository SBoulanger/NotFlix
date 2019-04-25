import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';
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
        this.Login = this.Login.bind(this);
        this.Logout = this.Logout.bind(this);
        this.CheckMovie = this.CheckMovie.bind(this);
        this.CheckProfile = this.CheckProfile.bind(this);
    }

    //functions to hide/show the modal
    showModal = () => {this.setState({show: true})}
    hideModal = () => {this.setState({show: false})}

    Login(){
      this.props.history.push('/')
    }
    Logout(){
      console.log('logging out');
      var myCookie = Cookie;
      myCookie.destroy();
      this.props.history.push('/');

    }
    LoadProfile(){
      this.props.history.push('/history');

    }
    LoadMovie(){
      this.props.history.push('/movie/10020');

    }
    CheckProfile(){
        var myCookie = Cookie;
        if (myCookie.exists()) this.LoadProfile();
    }
    CheckMovie(){
        var myCookie = Cookie;
        console.log(myCookie.exists());
        if (myCookie.exists()) this.LoadMovie();
    }
    render() {
        var myCookie = Cookie;
        if(myCookie.exists()){
          this.state.status =
                          <div>
                          {this.state.show ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }
                          <button className="open-modal-btn" onClick={this.showModal}>Welcome back</button>
                          <Modal className="modal" show={this.state.show} close={this.hideModal} >
                            <button onClick={this.Logout}> logout </button>
                            <button onClick={this.CheckProfile}> Profile </button>
                            <button onClick={this.CheckMovie}> Movies </button>
                          </Modal>
                         </div>
        } else {
          this.state.status = <button onClick={this.Login} id='loginbutton' >Login</button>
        }
        return (
          <div className="ui-header">
              <a className="logo" href="#logo">
                  <img className="logo" src={NotflixLogo} height={70} alt="this is wack"/>
              </a>
              <button onClick={this.CheckProfile} id='profile_button'> Profile </button>
             <button onClick={this.CheckMovie} id ='movie_button'> Movies </button>
             <input href="#search" className="search-bar" type="text" placeholder="Search Movies and TV..."></input>
             {this.state.status}
         </div>
      )
    }
}
export default withRouter(NavBar);
