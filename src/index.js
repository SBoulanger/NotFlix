import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HistoryProfile from './History_Profile';
import App from './App';
import HistoryPage from './History_Page';
import * as serviceWorker from './serviceWorker';
import Movie_Page from "./Movie_Page";
import SignIn from "./SignIn"
import NavBar from "./NavBar";

//You can change this render function to check on your components
//Change HistoryProfile to YourAppFile

ReactDOM.render(<NavBar />, document.getElementById('navbar'))
ReactDOM.render(<SignIn />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
