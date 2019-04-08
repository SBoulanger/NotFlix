import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Notflix from './imgs/Notflix.png';
import Button from './Button.js';
import InputTextBox from './InputTextBox.js';
import LinkText from './LinkText.js';

class NewSignUp extends Component {
   render() {
      return (
         <div className = "NewSignUp">
            <header className = "NewSignUp-header">
               <img src = {Notflix} className = "Notflix-logo" style = {{width: '30%'}} />
            </header>
            <body>
              <p> <InputTextBox promptText="Email here" type = "text" id = "EmailBox" /> </p> 
              <p> <InputTextBox promptText="Password here" type = "password" id = "PasswordBox" /> </p>
              <p> <InputTextBox promptText="Confirm password" type = "password" id = "ConfirmPassword" /> </p>
              <p> <Button text="Sign Up"/> </p>
              <p> <LinkText pathway="https://www.google.com" label="Already a member?" /> </p>
            </body>
          </div>
      );
   }
}

export default NewSignUp;

