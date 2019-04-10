import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Notflix from './imgs/Notflix.png';
import Button from './Button.js';
import InputTextBox from './InputTextBox.js';
import firebase from './Firestore';
import SignIn from './SignIn.js';
import './NewSignUp.css';

class NewSignUp extends Component {
   
   constructor() {
      super();
      this.state = {
         email: '',
         password:'',
         confirmation:''
      }
      this.updateInput = this.updateInput.bind(this);
      this.addUser = this.addUser.bind(this);
   }
   
   /* Re-renders page using SignIn.js component */
   toSignIn(){
      ReactDOM.render(<SignIn/>, document.getElementById('root'));
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

   /* INCOMPLETE
   Intended actions:
      1) make new document in Firestore with new credentials  
      2) generate cookie
      3) redirect to user's home page
   */
   addUser = e = > {
      e.preventDefault();
      /*INCOMPLETE: Add check so that password and confirmation states are same string.
      If password == confirmation, proceed below. Else, show user that there is a mistake 
      or a user with those credentials doesn't exist.
      */
      const db = firebase.firestore();
      db.settings({ timestampsInSnapshots: true });
      const userRef = db.collection("Users").doc(); /* makes new doc in Firestore with automatic ID*/
      const ID = userRef.id; /* automatic ID stored as string in ID */
      userRef.set({
         autoID : ID,  /* WORKING: able to get autoID and store as string */
         email: this.state.email, /*NOT WORKING*/
         password: this.state.password /*NOT WORKING*/
      });
      /*INCOMPLETE: Generate cookie with auto-ID as credentials. Rerender using cookie to 
      user home page.*/
   }
   
   /*Initial render*/
   render() {
      return (
         <div className = "NewSignUp">
            <header className = "NewSignUp-header">
               <img src = {Notflix} className = "Notflix-logo" style = {{width: '30%'}} />
            <form onSubmit = {this.addUser}>
              <p> <InputTextBox promptText="Email here" type = "text" id = "EmailBox" name = "email" onchange = {this.updateInput} value = {this.state.email} /> </p> 
              <p> <InputTextBox promptText="Password here" type = "password" id = "PasswordBox" name = "password" onchange = {this.updateInput} value = {this.state.password} /> </p>
              <p> <InputTextBox promptText="Confirm password" type = "password" id = "ConfirmPassword" / name = "confirmation" onchange = {this.updateInput} value = {this.state.confirmation}> </p>
              <p> <Button type="Submit" text="Sign Up"/> </p>
              <p style = {{cursor: 'pointer'}} onClick {this.toSignIn}> Already a member? </p>
             </form>
            </header>
          </div>
      );
   }
}

export default NewSignUp;

