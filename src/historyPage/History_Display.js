import React from 'react';
import HistoryMovie from './History_Movie';
import firebase from '../libraries/Firestore';
import './history.css';

class History_Display extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			movieHistory: [
				{title: "Movie1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"}, 
				{title: "Movie2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"}, 
				{title: "Movie3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"}
			]
		};
	}

	componentDidMount() {
		var movHistory =[];
		// Populate the movieHistory array in state with the movie id in the history database. 
		// firebase.firestore().collection('histories')
		// .doc('P3Fb8A9YaxaLcobOGejl')
		// .collection('history')
		// .get()
		// .then((historySnap) => {
		// 		historySnap.forEach((movieDoc) => {
		// 			firebase.firestore().collection('movies')
		// 			.where("id", "==", movieDoc.id)
		// 			.get()
		// 			.then(results => {
		// 				results.forEach(result => {
		// 					movHistory.push(result.data());
		// 				})
		// 			})
		// 		});
		// 		this.setState({ movieHistory: movHistory }, ()=>console.log(this.state.movieHistory));
		// 	}
		// ); 
	}

	// Fetching data from history is in progress
	render(){

		console.log(this.state.movieHistory);

		const testMovies = this.state.movieHistory;
		let historyMovies = [];
		this.state.movieHistory.forEach(movie => {
			historyMovies.push(<HistoryMovie title={movie.title} description={movie.description} />);
		});

		console.log(historyMovies);
		return(

				<div>
					<div class="historyBar">
						<div>History</div>
						<div className="historyDisplay">
							{historyMovies}
						</div>
					</div>
				</div>
			)
	}
}

export default History_Display
