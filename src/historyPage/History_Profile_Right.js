import React from 'react'
import SignIn from '../loginPage/SignIn';
import { withRouter } from 'react-router-dom';
import Cookie from '../libraries/Cookie';

class HistoryProfileRight extends React.Component {
  Logout(){
    console.log('loging out');
    var myCookie = Cookie;
    myCookie.destroy();
    this.props.router.push('/');
  }
  render() {
    console.log('rendering profile');
    return (
      <div className="profile">
        <button>History</button>
        <br />
        <button>My Favorites</button>
        <br />
        <button>My Friends</button>
        <br />
        <button onClick={this.Logout} id='logoutbutton' >Logout</button>
      </div>
    );
  }
}

export default withRouter(HistoryProfileRight)
