import React from 'react';
import firebase from './Firestore'
import './basic.css'

class Movie_Page_Text extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title : "",
            description : "",
        };
    }
    componentDidMount() {
        var movieRef = firebase.firestore().collection('movies').doc(this.props.movieID);
        var getMovie = movieRef.get()
            .then(doc => {
                if (doc.exists) {
                    this.setState({
                        title: doc.data().title,
                        description: doc.data().overview
                    })
                }
                else {
                    this.setState({
                        title: "Movie not found"
                    })
                }
            });
    }

    render() {
        return (
            <div class = "titleui">
                {this.state.title}
                <div class ="smallui">
                    <img src={require('./imgs/linedivider.png')} width ={1200} height ={50} alt = {"line"}/>
                    <p> {this.state.description} </p>
                </div>
            </div>
        );
    }
}

export default Movie_Page_Text