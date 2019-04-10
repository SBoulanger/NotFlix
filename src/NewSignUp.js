import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Notflix from './imgs/Notflix.png';
import Button from './Button.js';
import InputTextBox from './InputTextBox.js';
import LinkText from './LinkText.js';
import firebase from './Firestore';

class NewSignUp extends Component {
   
   constructor() {
      super();
      this.state = {
         email: "test@test.com",
         password:"test",
         confirmation:"test
      }
      this.addUser = this.addUser.bind(this);
   }
   
   addUser = e = > {
      e.preventDefault();
      const db = firebase.firestore();
      db.settings({ timestampsInSnapshots: true });
      const userRef = db.collection("Users").add({
         email: this.state.email,
         password: this.state.password
      });
   }
   
   render() {
      return (
         <div className = "NewSignUp">
            <header className = "NewSignUp-header">
               <img src = {Notflix} className = "Notflix-logo" style = {{width: '30%'}} />
            </header>
            <body>
            <form onSubmit = {this.addUser}>
              <p> <InputTextBox promptText="Email here" type = "text" id = "EmailBox" /> </p> 
              <p> <InputTextBox promptText="Password here" type = "password" id = "PasswordBox" /> </p>
              <p> <InputTextBox promptText="Confirm password" type = "password" id = "ConfirmPassword" /> </p>
              <p> <Button type="Submit" text="Sign Up"/> </p>
              <p> <LinkText pathway="https://www.google.com" label="Already a member?" /> </p>
             </form>
            </body>
          </div>
      );
   }
}

export default NewSignUp;

