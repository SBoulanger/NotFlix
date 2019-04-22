import React from 'react';
import '../index.css';
import HistoryProfile from './History_Profile';
import ActionBar from '../components/Action_Bar';
import HistoryDisplay from './History_Display';
import NavBar from '../components/Action_Bar';


class History_Page extends React.Component {

	render() {
		return (
			<div>
				<ActionBar />
				<HistoryProfile />
				<HistoryDisplay />
			</div>
		)
	}
}

export default History_Page
