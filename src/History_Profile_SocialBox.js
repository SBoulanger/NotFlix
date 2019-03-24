import React from 'react'

class History_Profile_SocialBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      social: "I like lots of stuff, but mostly pokemons.",
    };
  }
  render() {
    return (
      <div className="profile">
        <p> A little about me: {this.state.social} </p>
      </div>
    );
  }
}

export default History_Profile_SocialBox
