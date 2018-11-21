import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import clientPage from './components/clientPage';
import employeePage from './components/employeePage';
import portfolioPage from './components/portfolioPage';
import NavBar from './components/NavBar';
import clientNew from './components/clientNew';
// import styled from 'styled-components';
import clientRemove from './components/clientRemove';
import employeeUpdatePage from './components/employeeUpdatePage';


// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path='./clients/' component={clientRemove} />
            <Route exact path='/employee/:employeeId' component={employeeUpdatePage} />
            <Route exact path='/:employeeId/clients/clientnew' component={clientNew} />
            <Route exact path='/:employeeId/clients' component={clientPage} />
            <Route exact path='/:employeeId/clients/:clientId' component={portfolioPage} />
            <Route path='/' component={employeePage} />

          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
