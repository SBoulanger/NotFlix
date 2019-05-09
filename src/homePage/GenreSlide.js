import React from 'react';
import { withRouter } from 'react-router-dom';
import '../basic.css'

class GenreSlide extends React.Component{
    constructor(props) {
        super(props);
        this.LoadMovie = this.LoadMovie.bind(this);
    }
    LoadMovie(){
        this.props.history.push('/movie/' + this.props.movieID);
    }
    render() {
        return (
            <div className ="genrefilmdisplay" onClick={this.LoadMovie}>
                {this.props.movieTitle}
            </div>
        );
    }
}
export default withRouter(GenreSlide)