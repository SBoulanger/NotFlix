import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Notflix from './imgs/Notflix.png';
import Shooting from './imgs/Shooting.png';
import './Sign_in_up.css';
import NewSignUp from './NewSignUp.js';
import firebase from './Firestore'
import LoginButton from './LoginButton.js';
import SignupButton from './SignupButton.js';
import SignInUpTextBox from './Sign_in_up_textbox.js'

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
      const email = this.state.email;
      const password = this.state.password;
      firebase.userLogin(email, password)
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
            <div className = "Corner-column">
               <img src = {Shooting} className = "Shooting"/>
            </div>
            <div className = "Main-container">   
               <div className = "Left-column">
                  <img src = {Notflix} className = "Notflix-logo"/> 
               </div>
               <div className = "Right-column">
                  <div className = "Welcome-column">
                        <div className = "Welcome-label"> Welcome Back! </div>
                  </div>
                  <div className = "Email-column">
                     <div className = "Email-label"> Email Address </div>
                     <div> <SignInUpTextBox type = "text" id = "EmailBox" name="email" value = {this.state.email} onchange={this.updateInput}/> </div> 
                  </div>
                  <div className = "Password-column">
                     <div className = "Password-label"> Password </div>
                     <div> <SignInUpTextBox type = "password" id = "PasswordBox" name="password" value = {this.state.password} onchange={this.updateInput} /> </div>
                  </div>
                  <div className = "Button-container">
                     <div className = "LoginBtn"> <LoginButton onClick={this.LogIn} id ='signinbutton' text="Login"/> </div>
                     <div className = "SignupBtn"> <SignupButton onClick={this.toSignUp} id ='signupbutton' text="Sign Up"/> </div>
                  </div>
               </div>
            </div>
          </div>
      );
   }

   
}
//<p style = {{cursor: 'pointer'}} onClick = {this.toSignUp}>Not a member?" /> </p>
export default SignIn;

