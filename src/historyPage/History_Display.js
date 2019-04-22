import React from 'react';
import HistoryMovie from './History_Movie';
import firebase from '../libraries/Firestore';
import './historyDisplay.css';

class History_Display extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			movieHistory: []
		};
	}

	componentDidMount() {
		var movHistory =[];
		// Populate the movieHistory array in state with the movie id in the history database. 
		firebase.firestore().collection('histories')
		.doc('P3Fb8A9YaxaLcobOGejl')
		.collection('history')
		.get()
		.then((historySnap) => {
				historySnap.forEach((movieDoc) => {
					firebase.firestore().collection('movies')
					.where("id", "==", movieDoc.id)
					.get()
					.then(results => {
						results.forEach(result => {
							movHistory.push(result.data());
						})
					})
				});
				this.setState({ movieHistory: movHistory }, ()=>console.log(this.state.movieHistory));
			}
		); 
	} 

	render(){
		// (WORKING): Correctly prints the updated state.movieHistory
		console.log(this.state.movieHistory);

		// Test if the state's movieHistory is being rendered
		// Not working 
		return(
				<div className="historyDisplay">
					{this.state.movieHistory}
					<HistoryMovie />
				</div>
			)
	}
}

export default History_Display
