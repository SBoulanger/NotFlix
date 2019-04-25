import React from 'react';
import firebase from '../libraries/Firestore';
import { withRouter } from 'react-router-dom';

class HistoryMovie extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			desc: "",
			rating: "",
		};
	}

	// TO-DO
	// componentDidMount() {
	// 	firebase.firestore().collection('histories')
	// 	.doc('P3Fb8A9YaxaLcobOGejl')
	// 	.get()
	//
	// }

	//WIP
	render() {
		return (
			<div className="history_movie" className="flex-container">
				<img src="https://m.media-amazon.com/images/M/MV5BMTYyNDg0Njc2Nl5BMl5BanBnXkFtZTYwMDc3NzQ3._V1_UX182_CR0,0,182,268_AL_.jpg" alt="Stuart Little"/>
			</div>
		);
	}
}

export default withRouter(HistoryMovie)
