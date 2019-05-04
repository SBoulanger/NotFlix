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
            <div className ="homefilmdisplay" onClick={this.LoadMovie}>
                <div className={"hometitle"}>{this.props.movieTitle}</div><div className={'hometag'}>{this.props.movieTag}</div>
            </div>
        );
    }
}
export default withRouter(TopSlide)