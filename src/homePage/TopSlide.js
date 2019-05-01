import React from 'react';
import { withRouter } from 'react-router-dom';
import '../basic.css'

class TopSlide extends React.Component{
    constructor(props) {
        super(props);
        this.LoadMovie = this.LoadMovie.bind(this);
    }
    LoadMovie(){
        this.props.history.push('/movie/' + this.props.movieID);
    }
    render() {
        return (
            <div className ="filmdisplay" onClick={this.LoadMovie}>
                <div><div>{this.props.movieTitle}</div>{this.props.movieTag}<div></div></div>
            </div>
        );
    }
}
export default withRouter(TopSlide)