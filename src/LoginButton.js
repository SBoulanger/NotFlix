import React, { Component } from 'react';
import './LoginButton.css';

class LoginButton extends Component {

        constructor(props) {
                super(props);
                this.text = this.text; /*displayable text*/
                this.onClick = this.onClick; /*stores function when clicked*/
                this.type = this.type;
        }

        render() {
                return (
                     <button className = "LoginButton" type = {this.props.type} onClick = {this.props.onClick}>{this.props.text}</button>
                );
        }
}

export default LoginButton