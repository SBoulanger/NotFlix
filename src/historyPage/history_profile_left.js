import React from 'react';
import firebase from '../libraries/Firestore';
import Cookie from '../libraries/Cookie';

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
    const autoID = Cookie.get();
    firebase.db.collection('users')
    .doc(autoID)
    .get()
    .then(doc => this.setState({
      userName: doc.data().username,
      bio: doc.data().bio}));
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
