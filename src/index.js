import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import MyComponent from "./example/MyComponent";
import NavBar from "./NavBar";
import NavBar_old from "./NavBar_old";

// ReactDOM.render(<NavBar_old />, document.getElementById('navBar'));
ReactDOM.render(<NavBar />, document.getElementById('navBar'));
ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<MyComponent />, document.getElementById('mycomp'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
