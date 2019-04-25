import React from 'react';
import firebase from '../libraries/Firestore'
import Cookie from '../libraries/Cookie';
import ProfilePicture from '../imgs/defaultProfile.jpg';

class History_Profile_Left extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      autoID: "",
      bio: "",
      //firstName : "",
      //lastName : "",
      imageURL: "default.jpg",
      username: ""
    };
  }

  //Anne Suzuki and Kimleng Hor commented this part out
  // componentDidMount() {
  //  firebase.firestore().collection('users')
  //   .doc('P3Fb8A9YaxaLcobOGejl')
  //   .get()
  //   .then(doc => this.setState({
  //     userName: doc.data().username,
  //     firstName: doc.data().FirstName,
  //     lastName: doc.data().LastName,
  //     bio: doc.data().Biography}));
  // }

  componentDidMount() {

    //Printing
    // console.log(Cookie.get());
    console.log("The console is " + firebase.auth.currentUser.email);

    firebase.db.collection('users').doc(Cookie.get()).get().then(doc => this.setState ({
      autoID: doc.data().autoID,
      bio: doc.data().bio,
      imageURL: doc.data().imageURL,
      username: doc.data().username
    }));


  }

  render() {
    return (
      <div>
        <h3> Hi {this.state.username}! </h3>
        <br />
        <img className="profilePicture" src={ProfilePicture} height={150} alt="Profile picture"/>
        <br />
        Your Bio: {this.state.bio}
      </div>
    );
  }
}

export default History_Profile_Left
