import React from 'react';
import firebase from '../libraries/Firestore';
import './history.css';

<<<<<<< HEAD
<<<<<<< HEAD
class History_Movie extends React.Component {
=======
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
>>>>>>> be43b86baf257fc0fbcafff2efa0fc2496a76c7e

	render() {
		return (
<<<<<<< HEAD
			<div class="historyContentBox">
=======
			<div className="history_movie" className="flex-container">
>>>>>>> be43b86baf257fc0fbcafff2efa0fc2496a76c7e
=======
class HistoryMovie extends React.Component {

	render() {
		return (
			<div className="history_movie" className="flex-container">
>>>>>>> ddddb62bfb2e900bf76f4f172ae83f5bd4c8c690
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
