import React, { Component } from 'react';
import './App.css';
import fire from "./libraries/Firestore";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
     email: "",
     username: ""
    };
  }

  updateInput = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
  }

  addUser = e => {
      e.preventDefault();
      const db = fire.firestore();
      db.settings({
        timestampsInSnapshots: true
      });
      const userRef = db.collection("users").add({
        username: this.state.username,
        email: this.state.email
      });
      this.setState({
        username: "",
        email: ""
      });
  };

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
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default App;
