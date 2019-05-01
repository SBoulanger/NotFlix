import React from 'react';
import firebase from '../libraries/Firestore'

class Rating extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rating : ""
        };
    }
    componentDidMount() {
        var movieRef = firebase.db.collection('movies').doc(this.props.movieID);
        var getMovie = movieRef.get()
            .then(doc => {
                if (doc.exists) {
                    this.setState({
                        rating: doc.data().vote_average/2 + "/5"
                    })
                }
                else {
                    this.setState({
                        rating: "N/A"
                    })
                }
            });
    }
   render() {
      return (
          <div><h1>{this.state.rating}</h1></div>
      );
   }
}

export default Rating;
