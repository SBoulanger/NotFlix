import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Notflix from './img/Notflix.png';
import Button from './Button.js';
import InputTextBox from './InputTextBox.js';
import LinkText from './LinkText.js';

const e = React.createElement;

class SignIn extends Component {
   render() {
      return (
         <div className = "SignIn">
            <header className = "SignIn-header">
               <img src = {Notflix} className = "Notflix-logo" style = {{width: '30%'}} />
            </header>
            <body>
              <p> <InputTextBox promptText="Email here" type = "text" id = "EmailBox" /> </p> 
              <p> <InputTextBox promptText="Password here" type = "password" id = "PasswordBox" /> </p>
              <p> <Button text="Sign In"/> </p>
              <p> <LinkText pathway="https://www.google.com" label="Not a member?" /> </p>
            </body>
          </div>
      );
   }
}

export default SignIn;

