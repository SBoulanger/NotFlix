import React, { Component } from 'react';
import { withRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HistoryPage from './historyPage/History_Page';
import SignIn from './loginPage/SignIn';
import NewSignUp from './loginPage/NewSignUp';
import MoviePage from "./moviePage/Movie_Page";

class App extends React.Component {

  render() {
    return (

    <Router>
        <div>
        <Switch>
            <Route exact path='/' component={SignIn} />
            <Route path='/movie/:id' component={MoviePage} />
            <Route exact path='/history' component={HistoryPage} />
            <Route exact path='/newUser' component={NewSignUp} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default withRouter(App);
