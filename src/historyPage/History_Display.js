import React from 'react';
import Cookie from '../libraries/Cookie';
import HistoryMovie from './History_Movie';
import firebase from '../libraries/Firestore';
import './history.css';

class HistoryDisplay extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			movieHistory: []
		};
	}

	componentDidMount() {

		var movies = [];
		firebase.db.collection('histories')
			.doc(Cookie.get())
			.get()
			.then(doc => {
				movies = doc.data().Movies.map(movie => {
					return firebase.db.collection('movies')
						.doc(movie)
						.get()
						.then(doc => {
							return doc.data();
						});
					
				})
				Promise.all(movies).then(values => {
					this.setState({movieHistory: values});
					console.log(this.state.movieHistory);
				})
			});
	}


	render(){

		let historyMovies = this.state.movieHistory.map(movie => {
			return <HistoryMovie title={movie.title} overview={(movie.overview.length > 260 && movie.title.length > 30) ? (movie.overview.substring(0, 260) + "...") : movie.overview} />
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
