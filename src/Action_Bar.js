import React from 'react';
import './basic.css'

class Action_Bar extends React.Component{
    render() {
        return (
            <div className = "actionbar">
                <div className="actionbarelement"><a href="#"><img src={require('./imgs/playicon.png')} width ={50} height ={40} alt = {"Play"} onClick="alert('Play Movie'); return false;"/></a>
                <img src={require('./imgs/shareicon.png')} width ={50} height ={40} alt = {"Share"}/>
                <img src={require('./imgs/addicon.png')} width ={50} height ={40} alt = {"Add"}/>
                <img src={require('./imgs/moreicon.png')} width ={50} height ={40} alt = {"More"}/></div>
            </div>
        );
    }
}

export default Action_Bar