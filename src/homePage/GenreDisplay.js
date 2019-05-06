import React from 'react';
import Carousel from 'nuka-carousel';
import { withRouter } from 'react-router-dom';
import '../basic.css'
import MovieSearch from "../libraries/MovieSearch";
import GenreSlide from "./GenreSlide";

class GenreDisplay extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            divs: []
        };
    }

    componentDidMount() {
	if (this.props.genre == "none"){
            var queryRef = new MovieSearch(this.props.sortType || "highest_rated", this.props.numMov);
	} else {
            var queryRef = new MovieSearch("genre", this.props.numMov, this.props.genre);
	}
        queryRef.get()
            .then(query => {
                if (query.empty) {
                    //do nothing
                    console.log("nothing found");
                }
                else {
                    query.docs.forEach(doc => {
                        if(doc.exists){
                            this.setState(state =>{
                                const divs = this.state.divs.concat(<GenreSlide key={doc.id} movieID={doc.id} movieTitle={doc.data().title}/>)
                                return{
                                    divs
                                };
                            });
                        }
                        else{
                            console.log("document doesn't exist");
                        }
                    })
                }
            });
    }
    render() {
        return (
            <div>
                <div className={'genrename'}>{this.props.genre}</div>
                <Carousel
                wrapAround ={true}
                renderCenterLeftControls={({ previousSlide }) => (
                    <img src={require('../imgs/leftArrow.png') } width ={200} height ={150} onClick={previousSlide}/>
                )}
                renderCenterRightControls={({ nextSlide }) => (
                    <img src={require('../imgs/rightArrow.png') } width ={200} height ={150} onClick={nextSlide}/>
                )}
                renderBottomCenterControls={null}
                slidesToShow={5}
                framePadding={'40px 120px'}>
                {this.state.divs}
                </Carousel>
            </div>
        );
    }
}
export default withRouter(GenreDisplay)
