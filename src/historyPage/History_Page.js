import React from 'react';
import '../index.css';
import HistoryProfile from './History_Profile';
import ActionBar from '../components/Action_Bar';
import HistoryDisplay from './History_Display';
import NavBar from '../components/NavBar';
import App from '../loginPage/SignIn';
import Cookie from '../libraries/Cookie';
import { withRouter } from 'react-router-dom';

class HistoryPage extends React.Component {
  GetComponents(){
		var myCookie = Cookie;
		if (myCookie.exists()) {
			return (
			<div>
				<NavBar />
				<ActionBar />
				<HistoryProfile />
				<HistoryDisplay />
			</div>
		)
	}
		else return (<div> <App /> </div>)
	}
	render() {
		return (this.GetComponents())
	}
}

export default withRouter(HistoryPage)
