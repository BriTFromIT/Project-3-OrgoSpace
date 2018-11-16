import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import clientPage from './components/clientPage';
import employeePage from './components/employeePage';
import portfolioPage from './components/portfolioPage';
import NavBar from './components/NavBar'; 

// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <NavBar/>
        <Switch>
          <Route exact path='/clients' component= {clientPage}/>>
          <Route exact path='/portfolios' component= {portfolioPage}/>>
          <Route path='/' component= {employeePage}/>>

        </Switch>
        
      </div>
    </Router>
    );
    }
}

export default App;
