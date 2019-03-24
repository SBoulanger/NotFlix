import React from 'react'

class History_Profile_Left extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "John",
      lastName: "Do",
      imageURL: '../imgs/defaultProfile',
      bio: "This is the story of my life.",
    };
  }
  render() {
    return (
      <div className="profile">
        <h2> {this.state.firstName} {this.state.lastName} </h2>
        <br />
        <img src = {this.state.imageURL}/>
        <br />
        <p> Bio: {this.state.bio} </p>
      </div>
    );
  }
}

export default History_Profile_Left
