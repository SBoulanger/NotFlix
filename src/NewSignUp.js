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
      const db = firebase.firestore();
      db.settings({ timestampsInSnapshots: true });
      const userRef = db.collection("users").doc(); /* makes new doc in Firestore with automatic ID*/
      const ID = userRef.id; /* automatic ID stored as string in ID */
      userRef.set({
         autoID : ID,  /* WORKING: able to get autoID and store as string */
         email: this.state.email, /*NOT WORKING*/
         password: this.state.password, /*NOT WORKING*/
         username: this.state.username
      });
      /*INCOMPLETE: Generate cookie with auto-ID as credentials. Rerender using cookie to
      user home page.*/
   }

   /*Initial render*/

      render() {
        return (
          <form onSubmit={this.addUser}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={this.updateInput}
              value={this.state.username}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={this.updateInput}
              value={this.state.email}
            />
            <button type="submit">
            Submit
            </button>
          </form>
        );
      }

}

export default NewSignUp;
