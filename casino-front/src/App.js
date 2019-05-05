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
import Offices from './Containers/OfficesContainer';
import Employees from  './Containers/EmployeesContainer';
import Clients from './Containers/ClientContainer';

class App extends Component {
  render(){
    return (
            <div className="App">
                <NavMenu />
                <Route exact path='/' component={Login}/>
                <Route exact path={Routes.offices} component={Offices} />
                <Route path={Routes.sales} component={SalesList} />
                <Route path={Routes.employees} component={Employees}/>
                <Route path={Routes.exchangeReport} component={ExchangeReport} />
                <Route path={Routes.clients} component={Clients} />
            </div>

    );
  }
}

export default App;
