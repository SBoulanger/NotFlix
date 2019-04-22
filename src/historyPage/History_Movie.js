import React from 'react';
import firebase from '../libraries/Firestore';
import './historyDisplay.css';

class History_Movie extends React.Component {

	render() {
		return (
			<div class="historyContentBox">
				<img src="https://m.media-amazon.com/images/M/MV5BMTYyNDg0Njc2Nl5BMl5BanBnXkFtZTYwMDc3NzQ3._V1_UX182_CR0,0,182,268_AL_.jpg" alt="Stuart Little"/>
				<div class= "contentInfo">
					<h1 id="title">Title</h1>
					<h2 id="description">Description</h2>
				</div>
			</div>
		);
	}
}

export default History_Movie