import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';
import './NavBar.css';
import NotflixLogo from '../imgs/Notflix.png';
import Cookie from '../libraries/Cookie';
import SearchBar from './Search_Bar';
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
        this.CheckHome = this.CheckHome.bind(this);
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
    LoadHome(){
      this.props.history.push('/home');

    }
    CheckProfile(){
        var myCookie = Cookie;
        if (myCookie.exists()) this.LoadProfile();
    }
    CheckHome(){
        var myCookie = Cookie;
        if (myCookie.exists()) this.LoadHome();
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
                              <button onClick={this.CheckHome}> Home </button>
                            <button onClick={this.CheckProfile}> Profile </button>
                          </Modal>
                         </div>
        } else {
          this.state.status = <button onClick={this.Login} id='loginbutton' >Login</button>
        }
        return (
          <div className="ui-header">
              <a className="logo">
                  <img className="logo" onClick={this.CheckHome} src={NotflixLogo} height={70} alt="this is wack"/>
              </a>
              <button onClick={this.CheckHome} id ='home_button'> Home </button>
              <button onClick={this.CheckProfile} id='profile_button'> Profile </button>
             <SearchBar />
             {this.state.status}
         </div>
      )
    }
}
export default withRouter(NavBar);
