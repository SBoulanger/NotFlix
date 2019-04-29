//receives url and creates required markup so that it will act as one of the slides in the carousel
import React from 'react';
import './Carousel.css';

const MovieSlider = (props) => {

    const styles = {

            backgroundColor: `black`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',

    }

    return (
        <div className= "movie-slider" style={styles}>
            <img src={props.url} alt= "missingImage"/>
            <div id="text">
                <header> {props.title}  </header>
                <p>{props.description}</p>
            </div>



        </div>
    );
}
export default MovieSlider;