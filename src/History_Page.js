import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HistoryProfile from './History_Profile';
import ActionBar from './Action_Bar';
import HistoryDisplay from './History_Display';


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