import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Notflix from './imgs/Notflix.png';
import Button from './Button.js';
import InputTextBox from './InputTextBox.js';
import './SignIn.css';
import NewSignUp from './NewSignUp.js';
import firebase from './Firestore'

class SignIn extends Component {
   
   constructor(){
      super();
      this.state = {
         email: '',
         password:''
      }
      this.toSignUp = this.toSignUp.bind(this);
      this.LogIn = this.LogIn.bind(this);
      this.updateInput = this.updateInput.bind(this);
   }
   
   /*INCOMPLETE
   1) Query Firestore for given email and password
   2) If exist generate cookie and direct to user's home page
   3) If doesn't exist, warn user.
   */
   LogIn(){
      console.log('Authenticate users here');
   }
   
   /*WORKING: Rerenders page to sign up page for new users*/
   toSignUp(){
      ReactDOM.render(<NewSignUp/>,document.getElementById('root'));
   }
   
   /* NOT WORKING: Intended to update state to whatever is in InputTextBox */
   updateInput = e => {
      this.setState({
         [e.target.name]: e.target.value
      });
      /*To check what is happening*/
      console.log('email');
      console.log(this.state.email);
      console.log(e.target.value);
   }
   
   render() {
      return (
         <div className = "SignIn">
            <header className = "SignIn-header">
               <img src = {Notflix} className = "Notflix-logo" style = {{width: '30%'}} />     
              <p> <InputTextBox promptText="Email here" type = "text" id = "EmailBox" name="email" value = {this.state.email} onchange={this.updateInput}/> </p> 
              <p> <InputTextBox promptText="Password here" type = "password" id = "PasswordBox" name="password" value = {this.state.password} onchange={this.updateInput} /> </p>
              <p> <Button onClick={this.LogIn} id ='signinbutton' text="Sign In"/> </p>
              <p style = {{cursor: 'pointer'}} onClick = {this.toSignUp}>Not a member?" /> </p>
            </header>
          </div>
      );
   }
}

export default SignIn;

