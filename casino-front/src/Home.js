import React, { Component } from 'react';
import {Layout} from 'antd'
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import NavMenu from './UI/GeneralComponents/Navigation';
//import Login from './UI/Account/login';
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
//import SalesForm from "./UI/Sales/SalesForm";
//import RewardForm from "./UI/Office/Rewards/RewardForm";
import RewardForm from './Containers/RewardFormContainer';
import ExchangeForm from "./UI/Exchange/ExchangeForm";
import RewardsList from "./UI/Office/Rewards/Rewards";
import UsersList from "./UI/Users/Users";
import Users from './Containers/UserContainer';
import Login from './Containers/LoginContainer';
import SalesForm from './Containers/SaleRegisterContainer';
import NavBarContainer from './Containers/NavBarContainer';
export default class Home extends Component{
    render(){
        return(
            <div>
                <NavBarContainer />
                <Route exact path={Routes.offices} component={Offices} />
                <Route path={Routes.employees} component={Employees}/>
                <Route path={Routes.sales} component={SalesList} />
                <Route path={Routes.salesRegister} component={SalesForm} />
                <Route path={Routes.exchangeReport} component={ExchangeReport} />
                <Route path={Routes.exchangeRegister} component={ExchangeForm} />
                <Route path={Routes.clients} component={Clients} />
                <Route path={Routes.rewardRegister} component={RewardForm} />
                <Route path={Routes.rewards} component={RewardsList} />
                <Route path={Routes.users} component={Users} />

            </div>
        );
    }
};