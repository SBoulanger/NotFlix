import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Notflix from '../imgs/Notflix.png';
import Shooting from '../imgs/Shooting.png';
import './Sign_in_up.css';
import NewSignUp from './NewSignUp.js';
import firebase from '../libraries/Firestore'
import LoginButton from './LoginButton.js';
import SignupButton from './SignupButton.js';
import SignInUpTextBox from './Sign_in_up_textbox.js';
import History_Page from '../historyPage/History_Page';
import Cookie from '../libraries/Cookie';

class SignIn extends Component {
   
   constructor(){
      super();
      this.state = {
         email: '',
         password:'',
         isLoggedin: false,
         emailMessage: '',
         passwordMessage: ''
      }
      this.toSignUp = this.toSignUp.bind(this);
      this.LogIn = this.LogIn.bind(this);
      this.updateInput = this.updateInput.bind(this);
   }

   LogIn(){
      console.log('Authenticate users here');
      const email = this.state.email;
      const password = this.state.password;

      if (password === '') {
         this.setState({ passwordMessage: "Please type in your password"})
      }
      if (email === '') {
         this.setState({ emailMessage: "Please type in your email address"})
         console.log("Please fill in all fields that are given")
      } 
      
      if (password !== '' && email !== '') {
         firebase.userLogin(email, password).then(success => {
            if (success) {
               this.setState({ isLoggedin: true })
            }
         })
         .catch(error => {
            this.setState({ passwordMessage: "Please check your password"})
            this.setState({ emailMessage: "Please check your email address"})
         })
      }  
   }

   Agree(){
      Cookie.create(firebase.auth.currentUser.uid);
      ReactDOM.render(<History_Page/>, document.getElementById('root'));
   }

   /*WORKING: Rerenders page to sign up page for new users*/
   toSignUp(){
      ReactDOM.render(<NewSignUp/>, document.getElementById('root'));
   }
   
   updateInput = e => {
      this.setState({
         [e.target.name]: e.target.value
      });
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
                     <div className = "Error-label"> {this.state.emailMessage} </div>
                  </div>
                  <div className = "Password-column">
                     <div className = "Password-label"> Password </div>
                     <div> <SignInUpTextBox type = "password" id = "PasswordBox" name="password" value = {this.state.password} onchange={this.updateInput} /> </div>
                     <div className = "Error-label"> {this.state.passwordMessage} </div>
                  </div>
                  <div className = "Button-container">
                     <div className = "LoginBtn"> 
                     {!this.state.isLoggedin ? (
                        <LoginButton onClick={this.LogIn} id ='signinbutton' text="Login"/>
                     ) : (
                        <LoginButton onClick={this.Agree} id ='agreebutton' text="Agree"/>
                     )}
                     </div>
                     <div className = "SignupBtn"> 
                     {!this.state.isLoggedin ? (
                        <SignupButton onClick={this.toSignUp} id ='signupbutton' text="Sign Up"/> 
                     ) : (
                        <div className = "Cookie-label"> This website is using cookies, please accept </div>
                     )}
                     </div>
                  </div>
               </div>
            </div>
          </div>
      );
   }
}
   
export default SignIn;


