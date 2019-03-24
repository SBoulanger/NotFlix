import React from 'react'
import History_Profile_Left from './history_profile_left'
import History_Profile_SocialBox from './History_Profile_SocialBox'
import History_Profile_Right from './History_Profile_Right'

const style = {
  display: 'flex',
  alignItems: 'center',
  padding: "20px",
  background: "#eee"
};

class History_Profile extends React.Component {
  render() {
    return (
      <div className="profile" style = {style}>
        <History_Profile_Left />
        <History_Profile_SocialBox />
        <History_Profile_Right />
      </div>
    );
  }
}

export default History_Profile
