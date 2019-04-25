import React from 'react';
import firebase from '../libraries/Firestore'
class HistoryProfileLeft extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName : "",
      firstName : "",
      lastName : "",
      imageURL : "default.jpg",
      bio : "",
    };
  }
  componentDidMount() {
   firebase.firestore().collection('users')
    .doc('P3Fb8A9YaxaLcobOGejl')
    .get()
    .then(doc => this.setState({
      userName: doc.data().username,
      firstName: doc.data().FirstName,
      lastName: doc.data().LastName,
      bio: doc.data().Biography}));
  }

  render() {
    return (
      <div>
        <h3> Hi {this.state.userName}! </h3>
        <br />
        // add image here
        <br />
        Your Bio: {this.state.bio}
      </div>
    );
  }
}

export default HistoryProfileLeft
