import React from 'react';
import Cookie from '../libraries/Cookie';
import HistoryMovie from './History_Movie';
import firebase from '../libraries/Firestore';
import './history.css';

class HistoryDisplay extends React.Component {

	constructor(props) {
		super(props);
		// this.state = {
		// 	movieHistory: []
		// };

		// For Testing CSS
		this.state = {
					movieHistory: [
						{title: "Movie1", overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"}, 
						{title: "Movie2", overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"}, 
						{title: "Movie3", overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"}
					]
				};
	}

	// NOT WORKING 
	componentDidMount() {
		// Populate the movieHistory array in state with the movie id in the history database. 

		// const getMovies = (id) => {
		//     return new Promise((resolve, reject) => {
		//         let movs = [];
		//         const snapshot = firebase.db.collection('histories')
		//             .doc(id)
		//             .get()
		//             .then((snapshot) => {
		//                 snapshot.data().Movies.forEach(mov => {
		//                 	firebase.db.collection('movies')
  //      						.doc(mov)
  //      						.get()
  //      						.then(doc => {
  //      							movs.push(doc.data());
  //      					});
		//                 });
		//                 resolve(movs); // return the movies only after they are fetched
		//             	console.log(movs);
		//             })
		//             .catch(error => {
		//                 reject(error);
		//             });
		//     });
		// };

		// let movies = [];
		// getMovies(Cookie.get()).then(movs => {
		// 	movies = movs;
		// 	this.setState({movieHistory: movies}, () => {this.setState({movieHistory: movies})});
		// });	
	
	}


	render(){

		let historyMovies = [];
		this.state.movieHistory.forEach(movie => {
			historyMovies.push(<HistoryMovie title={movie.title} overview={movie.overview} />);
		});
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

export default HistoryDisplay
