import React, { Component } from 'react';
import {Layout} from 'antd'
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import NavMenu from './UI/GeneralComponents/Navigation';
import Login from './UI/Account/login';
import OfficesList from './UI/Office/Offices';
import EmployeesList from './UI/Employee/Employees';
import {BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom'
import Routes from './utils/routes';
import SalesList from "./UI/Sales/Sales";
import ExchangeReport from "./UI/Exchange/ExchangeReport";
import ClientsList from "./UI/Client/Clients";

class App extends Component {
  render(){
    return (
        <Router>
            <div className="App">
                <NavMenu />
                <Route exact path='/' component={Login}/>
                <Route exact path={Routes.offices} component={OfficesList} />
                <Route path={Routes.sales} component={SalesList} />
                <Route path={Routes.employees} component={EmployeesList}/>
                <Route path={Routes.exchangeReport} component={ExchangeReport} />
                <Route path={Routes.clients} component={ClientsList} />
            </div>
        </Router>
    );
  }
}

export default App;
