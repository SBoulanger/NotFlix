import React from 'react';
//import { AppRegistry, View } from 'react-native';

const styles = {
//  position: relative,
  margin: '5px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '50%'
};


class Movieimg extends React.Component {
   render() {
      return (
        
      <img src={"http://img.gadgetian.com/Samsung-Google-Nexus-Prime-Teaser-Image.jpg"} alt="Logo" style={styles}/>
      );
   }
}

export default Movieimg;
