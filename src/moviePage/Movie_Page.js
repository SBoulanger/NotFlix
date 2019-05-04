import React from 'react';
import '../basic.css'
import NavBar from "../components/NavBar";
import Action_Bar from "../components/Action_Bar";
import { withRouter } from 'react-router-dom';
import Main_Movie from "./Main_Movie";
import Cookie from "../libraries/Cookie";
import firebase from '../libraries/Firestore'

class MoviePage extends React.Component{
    render() {
        var myCookie = Cookie;
        var tempArray = [];
        if(myCookie.exists()){
            var historyRef = firebase.db.collection('histories').doc(myCookie.get())
            historyRef.get().then(doc =>{
                if (doc.exists) {
                    var i;
                    for (i = 0; i < doc.data().Movies.length; i++) {
                        tempArray.push(doc.data().Movies[i]);
                    }
                    console.log(doc.data())
                    console.log(tempArray);
                    tempArray.push(this.props.match.params.id)
                    console.log(tempArray);
                    tempArray = [...new Set(tempArray)];
                    console.log(tempArray);
                    historyRef.set({
                        Movies: tempArray
                    });
                }
            })
        }
        return (
            <div>
                <NavBar />
                <Action_Bar />
                <Main_Movie movieID={this.props.match.params.id}/>
            </div>
        );
    }
}
export default withRouter(MoviePage)
