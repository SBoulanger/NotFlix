import React from 'react';
import HistoryProfileLeft from './history_profile_left';
import HistoryProfileSocialBox from './History_Profile_SocialBox';
import HistoryProfileRight from './History_Profile_Right';
import fire from '../libraries/Firestore';
import { withRouter } from 'react-router-dom';

const style = {
  display: 'flex',
  alignItems: 'center',
  padding: "20px",
  background: "#eee"
};

class HistoryProfile extends React.Component {

  render() {
    return (
      <div className="profile" style = {style}>
        <HistoryProfileLeft />
        <HistoryProfileSocialBox />
        <HistoryProfileRight />
      </div>
    );
  }
}

export default withRouter(HistoryProfile)
