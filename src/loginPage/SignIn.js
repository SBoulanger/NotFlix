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

   /*COMPLETE
   1) Authenticate via Firestore with given email and password
   2) If doesn't exist, warn user.
   */
   LogIn(){
      const email = this.state.email;
      const password = this.state.password;
      if (password === ''){
         this.setState({ passwordMessage: "Please type in your password"})
      }
      if (email === ''){
         this.setState({ emailMessage: "Please type in your email address"})
      }
      if (password!== '' && email !==''){
         firebase.userLogin(email,password).then(success => {
            if(success) {this.setState({isLoggedin:true}) 
         }
      }).catch(error => {
            this.setState({passwordMessage:"Please check your password"}) 
            this.setState({emailMessage: "Please check your email address"})
         })
      }
   }
    
   Agree(){
      //Create cookie and redirect to history page
      Cookie.create(firebase.auth.currentUser.uid);
      ReactDOM.render(<History_Page/>, document.getElementById('root'));
   }

   /*WORKING: Rerenders page to sign up page for new users*/
   toSignUp(){
      ReactDOM.render(<NewSignUp/>,document.getElementById('root'));
   }

   /*WORKING: Intended to update state to whatever is in InputTextBox */
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
