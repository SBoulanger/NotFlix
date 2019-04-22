import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HistoryPage from './historyPage/History_Page';
import * as serviceWorker from './libraries/serviceWorker';
import MoviePage from "./moviePage/Movie_Page";
import SignIn from "./loginPage/SignIn";
import NavBar from "./components/NavBar"


//You can change this render function to check on your components
//Change HistoryProfile to YourAppFile

ReactDOM.render(<SignIn />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
