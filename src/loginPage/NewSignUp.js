import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Notflix from '../imgs/Notflix.png';
import firebase from '../libraries/Firestore';
import SignIn from './SignIn.js';
import './Sign_in_up.css';
import Shooting from '../imgs/Shooting.png';
import LoginButton from './LoginButton.js';
import SignInUpTextBox from './Sign_in_up_textbox.js';
import Cookie from '../libraries/Cookie';
import History_Page from '../historyPage/History_Page';
import {withRouter} from 'react-router-dom';

class NewSignUp extends Component {

   constructor() {
      super();
      this.state = {
         user: '',
         email: '',
         password:'',
         confirmPassword:'',
         isCreated: false,
         emailMessage: '',
         userMessage: '',
         passwordMessage: ''
      }
      this.updateInput = this.updateInput.bind(this);
      this.addUser = this.addUser.bind(this);
      this.Agree = this.Agree.bind(this);
   }

   /* Re-renders page using SignIn.js component */
   toSignIn(){
      this.props.history.push('/')
   }

   /* WORKING: Intended to update state to whatever is in InputTextBox */
   updateInput = e => {
      this.setState({
         [e.target.name]: e.target.value
      });
   }

   addUser = e => {
      e.preventDefault();

      const name = this.state.user;
      const email = this.state.email;
      const password = this.state.password;
      const confirmPassword = this.state.confirmPassword;

      if (Cookie.exists()) {
         Cookie.destroy();
      }

      if (name === '') {
         this.setState({ userMessage: "Please type in your username"})
      }

      if (password === '') {
         this.setState({ passwordMessage: "Please type in your password"})
      }
      if (email === '') {
         this.setState({ emailMessage: "Please type in your email address"})
      }

      if (password !== confirmPassword) {
         this.setState({ passwordMessage: "Please make sure your password and confirm password match"})
      } else {
         if (password !== '' && email !== '' && name !== '') {
            firebase.createUser(name, email, password).then(success => {
               this.setState({ isCreated: true, passwordMessage: "", emailMessage: "", userMessage: "" });
            })
            .catch(error => {
               this.setState({ userMessage: ""})
               this.setState({ passwordMessage: "Please check your password"})
               this.setState({ emailMessage: "Please check your email address"})
            })
         }
      }
   }

   Agree = e => {
      e.preventDefault();
      const name = this.state.user;
      firebase.db.collection('users').doc(firebase.auth.currentUser.uid).set({
         autoID: firebase.auth.currentUser.uid,
         username: name,
         imageURL: "",
         bio: ""
      })

      firebase.db.collection('histories').doc(firebase.auth.currentUser.uid).set({
         Movies: []
      })

      Cookie.create(firebase.auth.currentUser.uid);
      this.props.history.push('/history')
   }

   /*Initial render*/
   render() {

      return (
         <div className = "NewSignUp">
            <div className = "Corner-column">
               <img src = {Shooting} className = "Shooting"/>
            </div>
            <div className = "Main-container">
               <div className = "Left-column">
                  <img src = {Notflix} className = "Notflix-logo"/>
               </div>
               <div className = "Right-column">
                  <div className = "Welcome-column">
                        <div className = "Welcome-label"> Sign up </div>
                  </div>
                  <div className = "Email-column">
                     <div className = "Email-label"> Username </div>
                     <div> <SignInUpTextBox type = "text" id = "UserBox" name="user" value = {this.state.user} onchange={this.updateInput}/> </div>
                     <div className = "Error-label"> {this.state.userMessage} </div>
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
                  <div className = "Password-column">
                     <div className = "Password-label"> Confirm Password </div>
                     <div> <SignInUpTextBox type = "password" id = "ConfirmBox" name="confirmPassword" value = {this.state.confirmPassword} onchange={this.updateInput} /> </div>
                  </div>
                  <div>
                     <div className = "CreateBtn">
                     {!this.state.isCreated ? (
                        <LoginButton  onClick={this.addUser} id ='createButton' text="Create"/>
                     ) : (
                        <LoginButton onClick={this.Agree} id ='agreebutton' text="Agree"/>
                     )}
                     </div>
                  </div>
                  {!this.state.isCreated ? (
                     <div className = "Agreelabel"></div>
                  ) : (
                     <div className = "Agreelabel"> By signing up, you agree to our Terms , Data Policy and Cookies Policy. </div>
                  )}
               </div>
            </div>
          </div>
      );
   }
}

export default withRouter(NewSignUp);


// firebase.db.collection('histories').doc(firebase.auth.currentUser.uid).set({
//    Movies: []
// })
