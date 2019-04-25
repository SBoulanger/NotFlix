import React from 'react';
//import firebase from './Firestore'
//import { AppRegistry, View } from 'react-native';


const styles = {
    margin: '20px',
    width: '200px',
    height: '200px',
};


class Rating extends React.Component {

   render() {
      return (
      <img src={require('../imgs/examplerating.png')} alt="Logo" style={styles}/>

      );
   }
}

export default Rating;
