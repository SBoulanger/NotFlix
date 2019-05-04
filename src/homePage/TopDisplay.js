import React from 'react';
import Carousel from 'nuka-carousel';
import { withRouter } from 'react-router-dom';
import '../basic.css'
import MovieSearch from "../libraries/MovieSearch";
import TopSlide from "./TopSlide";

class TopDisplay extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            divs: []
        };
    }
    componentDidMount() {
        var queryRef = new MovieSearch("newest", 8);
        var getMovie = queryRef.get()
            .then(query => {
                if (query.empty) {
                    //do nothing
                    console.log("nothing found");
                }
                else {
                    query.docs.forEach(doc => {
                        if(doc.exists){
                            this.setState(state =>{
                                const divs = this.state.divs.concat(<TopSlide key={doc.id} movieID={doc.id} movieTitle={doc.data().title} movieTag={doc.data().tagline}/>)
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
                <div className={'genrename'}>{'Recently Released'}</div>
                <Carousel
                    wrapAround ={true}
                    renderCenterLeftControls={({ previousSlide }) => (
                    <img src={require('../imgs/leftArrow.png') } width ={350} height ={240} onClick={previousSlide}/>
                )}
                  renderCenterRightControls={({ nextSlide }) => (
                      <img src={require('../imgs/rightArrow.png') } width ={350} height ={240} onClick={nextSlide}/>
                  )}
                    framePadding={'20px'}>
                    {this.state.divs}
                </Carousel>
            </div>
        );
    }
}
export default withRouter(TopDisplay)