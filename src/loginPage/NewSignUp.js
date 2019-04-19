import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Notflix from '../imgs/Notflix.png';
import firebase from '../libraries/Firestore';
import SignIn from './SignIn.js';
import './Sign_in_up.css';
import Shooting from '../imgs/Shooting.png';
import LoginButton from './LoginButton.js';
import SignInUpTextBox from './Sign_in_up_textbox.js'
import Cookie from '../libraries/Cookie';

class NewSignUp extends Component {

   constructor() {
      super();
      this.state = {
         user: '',
         email: '',
         password:'',
         confirmationPassword:'',
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
      ReactDOM.render(<SignIn/>, document.getElementById('root'));
   }

   /* COMPLEETE: Update state to whatever is in InputTextBox */
   updateInput = e => {
      this.setState({
         [e.target.name]: e.target.value
      });
   }

   /* COMPLETE
      1) make new document in Firestore with new credentials 
      2) generate cookie
      3) redirect to user's home page
   */
   addUser = e => {
      e.preventDefault();
      const name = this.state.user;
      const email = this.state.email;
      const password = this.state.password;
      const confirmPassword = this.state.confirmPassword;
      
      //Clear out any existing cookies on website
      if (Cookie.exists()) {
         Cookie.destroy();
      }
      
      /*COMPLETE: Check so that password and confirmation states are same string.
      If password == confirmation, proceed below. Else, show user that there is a mistake
      or a user with those credentials doesn't exist.*/
      if (name === ''){
         this.setState({ userMessage: "Please type in your username"})
      }
      if (password === ''){
         this.setState({ passwordMessage: "Please type in your password"})
      }
      if (email === '') {
         this.setState({ emailMessage: "Please type in your email address"})
      }
      if (password !== confirmPassword){
         this.setState({ passwordMessage: "Your confirmation does not match your password"})
      }
      else {
         if (password !== '' && email !== '' && name !== ''){
            firebase.createUser(name,email,password).then(sucess =>{
               //if successful
               this.setState({ isCreated: true,
                              passwordMessage: "", 
                              emailMessage: "",
                              userMessage:""});
                              
            })
            .catch(error => {
               this.setState({ userMessage: ""})
               this.setState({ passwordMessage: "Please check your password"})
               this.setState({ emailMessage: "Please check your email address"})
            })
         }
      }
   }
   
   // COMPLETE: Make cookie then redirect to user's history page.
   Agree = e => {
      e.preventDefault();
      const name = this.state.user;
      firebase.db.collection('users').doc(firebase.auth.currentUser.uid).set({
         autoID: firebase.auth.currentUser.uid,
         username: name,
         imageURL: "",
         bio: ""
      })
      Cookie.create(firebase.auth.currentUser.uid);
      ReactDOM.render(<History_Page/>, document.getElementyById('root'));
   }


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
                     <div> <SignInUpTextBox type = "text" id = "UserBox" name="user" value = {this.state.username} onchange={this.updateInput}/> </div>
                  </div>
                  <div className = "Email-column">
                     <div className = "Email-label"> Email Address </div>
                     <div> <SignInUpTextBox type = "text" id = "EmailBox" name="email" value = {this.state.email} onchange={this.updateInput}/> </div>
                  </div>
                  <div className = "Password-column">
                     <div className = "Password-label"> Password </div>
                     <div> <SignInUpTextBox type = "password" id = "PasswordBox" name="password" value = {this.state.password} onchange={this.updateInput} /> </div>
                  </div>
                  <div className = "Password-column">
                     <div className = "Password-label"> Confirm Password </div>
                     <div> <SignInUpTextBox type = "password" id = "PasswordBox" name="password" value = {this.state.confirmation} onchange={this.updateInput} /> </div>
                  </div>
                  <div>
                     <div className = "CreateBtn"> <LoginButton  onClick={this.addUser} id ='createButton' text="Create"/> </div>
                  </div>
               </div>
            </div>
          </div>
      );
   }
}

export default NewSignUp;
