import React from 'react'
import SignIn from '../loginPage/SignIn'
import ReactDOM from 'react-dom';
import Cookie from '../libraries/Cookie';

class History_Profile_Right extends React.Component {
  Logout(){
    console.log('loging out');
    var myCookie = Cookie;
    myCookie.destroy();
    ReactDOM.render(<SignIn/>, document.getElementById('root'));
  }
  render() {
    console.log('rendering profile');
    return (
      <div className="socialRight">
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

export default History_Profile_Right
