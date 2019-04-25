import React from 'react';
import firebase from '../libraries/Firestore';
import './history.css';

class HistoryMovie extends React.Component {

	render() {
		return (
			<div className="history_movie" className="flex-container">
				<img src="https://m.media-amazon.com/images/M/MV5BMTYyNDg0Njc2Nl5BMl5BanBnXkFtZTYwMDc3NzQ3._V1_UX182_CR0,0,182,268_AL_.jpg" alt="Stuart Little"/>
				<div class= "contentInfo">
					<h1 id="title">{this.props.title}</h1>
					<h2 id="description">{this.props.description}</h2>
				</div>
			</div>
		);
	}
}

export default HistoryMovie
