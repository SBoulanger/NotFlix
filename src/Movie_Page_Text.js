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
        firebase.firestore().collection('movies')
            .doc('10020')
            .get()
            .then(doc => this.setState({
                title: doc.data().title,
                description: doc.data().overview})
            );
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