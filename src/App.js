import React, { Component } from 'react';
import { withRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HistoryPage from './historyPage/History_Page';
import MainMovie from './moviePage/Main_Movie';
import SignIn from './loginPage/SignIn';
import NavBar from './components/NavBar';
import NewSignUp from './loginPage/NewSignUp';

class App extends React.Component {

  render() {
    return (

    <Router>
        <div>
        <Switch>
            <Route exact path='/' component={SignIn} />
            <Route exact path='/movie' component={MainMovie} />
            <Route exact path='/history' component={HistoryPage} />
            <Route exact path='/newUser' component={NewSignUp} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default withRouter(App);
