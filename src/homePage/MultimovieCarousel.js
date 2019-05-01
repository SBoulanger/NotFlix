//Wrapper class that will be responsible to handle all logic in interface
//Add all other components to the div block being returned
import React from 'react';
import Arrow from './SliderArrow';

import './Carousel.css';
import MovieSlider from "./MovieSlider";


const imgUrls = [
    "https://cmeimg-a.akamaihd.net/640/clsd/getty/c64f76dc20c246ca88ee180fe4b4b781",
    "https://lh3.googleusercontent.com/oxPeODS2m6rYIVbhcQChRtOWEYeGDwbeeeB1cDU2o_WYAVPU61VIgx-_6BAh5gSL8Sw=h900",
    "https://i0.wp.com/www.universodegatos.com/wp-content/uploads/2017/04/fivfelv7.jpg?resize=582%2C328",
    "https://i.pinimg.com/736x/07/c3/45/07c345d0eca11d0bc97c894751ba1b46.jpg",
    "https://ehealthforum.com/health/images/avatars/11699147425707699031013.jpeg"
];

class MultiMovieCarousel extends React.Component {

    constructor(props) {
        super(props); //allows the access of properties through this.

        //initial state, property1: currentIndex
        this.state = {
            currentIndex: 0,

            isHovering: false
        };

        //Binding allows following functions to access keyword this.
        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
    }

    previousSlide() {
        const lastIndex = imgUrls.length -1;
        const {currentIndex} = this.state;
        const resetIndex = currentIndex=== lastIndex;
        const index = resetIndex ? 0 : currentIndex +1; //the new index will  be 0 if resetIndex is true,
        // else index++
        this.setState({currentIndex: index});
    }

    nextSlide(){
        const {currentIndex} = this.state;
        const jumpIndex = currentIndex === 0;
        const index= jumpIndex? imgUrls.length-1 : currentIndex-1; //if jumpIndex true, current index is 0 and index must jump to end
        //else decrement index
        this.setState({currentIndex: index});
    }

//{this.state.isHovering && <p> Wordsappear</p>}


handleMouseHover() {
        this.setState(this.toggleHoverState);
    }

    toggleHoverState(state) {
        return {
            isHovering: !state.isHovering,
        };
    }
    render(){
        return (
            <div className={"multiMovieCarousel"}>

                <MovieSlider
                    onMouseEnter={this.handleMouseHover}
                    onMouseLeave={this.handleMouseHover}
                    url= {imgUrls[this.state.currentIndex]}
                    title= "4"
                    description="this is the descriptive part">

                </MovieSlider>
                <MovieSlider
                    onMouseEnter={this.handleMouseHover}
                    onMouseLeave={this.handleMouseHover}
                    url= {imgUrls[(this.state.currentIndex+1)%5]}
                    title= "1"
                    description="this is the descriptive part">
                </MovieSlider>
                <MovieSlider
                    onMouseEnter={this.handleMouseHover}
                    onMouseLeave={this.handleMouseHover}
                    url= {imgUrls[(this.state.currentIndex+2)%5]}
                    title= "1"
                    description="rotato">
                </MovieSlider>
                <MovieSlider
                    onMouseEnter={this.handleMouseHover}
                    onMouseLeave={this.handleMouseHover}
                    url= {imgUrls[(this.state.currentIndex+3)%5]}
                    title= "Some Things in Life Juust Gotta Give"
                    description="Oncee upon a time I had a dog and he jumped very far but it was okay cuz I thought it was cool">
                </MovieSlider>
                <Arrow
                    direction={"left"}
                    clickFunction={this.previousSlide}
                    glyph= "&#9664;"
                />

                <Arrow
                    direction={"right"}
                    clickFunction={this.nextSlide}
                    glyph="&#9654;"
                />
            </div>
        );
    }
}

export default MultiMovieCarousel;