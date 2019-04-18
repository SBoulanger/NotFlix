import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Notflix from '../imgs/Notflix.png';
import firebase from '../libraries/Firestore';
import SignIn from './SignIn.js';
import './Sign_in_up.css';
import Shooting from '../imgs/Shooting.png';
import LoginButton from './LoginButton.js';
import SignInUpTextBox from './Sign_in_up_textbox.js'

class NewSignUp extends Component {

   constructor() {
      super();
      this.state = {
         username: '',
         email: '',
         password:'',
         confirmation:'Hi',
         username:''
      }
      this.updateInput = this.updateInput.bind(this);
      this.addUser = this.addUser.bind(this);
   }

   /* Re-renders page using SignIn.js component */
   toSignIn(){
      ReactDOM.render(<SignIn/>, document.getElementById('root'));
   }

   /* WORKING: Intended to update state to whatever is in InputTextBox */
   updateInput = e => {
      this.setState({
         [e.target.name]: e.target.value
      });
      /*To check what is happening*/
      console.log('email');
      console.log(this.state.email);
      console.log(e.target.value);
   }

   /* INCOMPLETE
   Intended actions:
      1) make new document in Firestore with new credentials - WORKING
      2) generate cookie
      3) redirect to user's home page
   */
   addUser = e => {
      e.preventDefault();
      /*INCOMPLETE: Add check so that password and confirmation states are same string.
      If password == confirmation, proceed below. Else, show user that there is a mistake
      or a user with those credentials doesn't exist.
      */
      // const db = firebase.firestore();
      // db.settings({ timestampsInSnapshots: true });
      // const userRef = db.collection("Users").doc(); /* makes new doc in Firestore with automatic ID*/
      // const ID = userRef.id; /* automatic ID stored as string in ID */
      // userRef.set({
      //    autoID : ID,  /* WORKING: able to get autoID and store as string */
      //    email: this.state.email, /*NOT WORKING*/
      //    password: this.state.password /*NOT WORKING*/
      // });

      //*-------------------------------------------------------------------
      //User needs to be put inside the Authentication for the login purpose
      const username = this.state.username;
      const email = this.state.email;
      const password = this.state.password;
      firebase.createUser(username, email, password);


      /*INCOMPLETE: Generate cookie with auto-ID as credentials. Rerender using cookie to
      user home page.*/
   }

   /*Initial render*/
   render() {
      // return (
      //    <div className = "NewSignUp">
      //       <header className = "NewSignUp-header">
      //          <img src = {Notflix} className = "Notflix-logo" style = {{width: '30%'}} />
      //       <form onSubmit = {this.addUser}>
      //         {
      //          <p> <InputTextBox promptText="Email here" type = "text" id = "EmailBox" name = "email" onchange = {this.updateInput} value = {this.state.email} /> </p>
      //          <p> <InputTextBox promptText="Password here" type = "password" id = "PasswordBox" name = "password" onchange = {this.updateInput} value = {this.state.password} /> </p>
      //          <p> <InputTextBox promptText="Confirm password" type = "password" id = "ConfirmPassword" / name = "confirmation" onchange = {this.updateInput} value = {this.state.confirmation}> </p>
      //          <p> <Button type="Submit" text="Sign Up"/> </p>
      //           <p style = {{cursor: 'pointer'}} onClick {this.toSignIn}> Already a member? </p>
      //         }
      //        </form>
      //       </header>
      //     </div>
      // );

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
