import React from 'react'

class History_Profile_Left extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName = "John",
      lastName = "Do",
      imageURL = "default.jpg",
      bio = "This is the story of my life.",
    };
  }
  render() {
    return (
      <div>
        <h3> {this.state.firstName} {this.state.lastName} <h3>
        <br>
        // add image here
        <br>
        Bio: {this.state.bio}
      </div>
    );
  }
}

export default History_Profile_Left
