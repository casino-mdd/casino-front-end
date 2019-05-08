import React, { Component } from 'react';
import {Layout} from 'antd'
import {connect} from 'react-redux';

import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import NavMenu from './UI/GeneralComponents/Navigation';
//import Login from './UI/Account/login';
import OfficesList from './UI/Office/Offices';
import EmployeesList from './UI/Employee/Employees';
import {BrowserRouter as Router, Route, Switch, withRouter, Redirect} from 'react-router-dom'
import Routes from './utils/routes';
//import SalesList from "./UI/Sales/Sales";
import ExchangeReport from "./UI/Exchange/ExchangeReport";
import ClientsList from "./UI/Client/Clients";
import Offices from './Containers/OfficesContainer';
import Employees from  './Containers/EmployeesContainer';
import Clients from './Containers/ClientContainer';
//import SalesForm from "./UI/Sales/SalesForm";
//import RewardForm from "./UI/Office/Rewards/RewardForm";
import RewardForm from './Containers/RewardFormContainer';
//import ExchangeForm from "./UI/Exchange/ExchangeForm";
//import RewardsList from "./UI/Office/Rewards/Rewards";
import UsersList from "./UI/Users/Users";
import Users from './Containers/UserContainer';
import Login from './Containers/LoginContainer';
import SalesForm from './Containers/SaleRegisterContainer';
import NavBarContainer from './Containers/NavBarContainer';
import {isSignedIn} from './Store/Actions/UserActions'
import RewardsList from './Containers/RewardsContainer';
import SalesList from './Containers/SaleContainer';
import ExchangeForm from './Containers/ExchangeContainer'

import ExchangeList from './Containers/ExchangeListContainer';

class App extends Component {
    componentDidUpdate(){
        console.log('no mamen a ver');

    }
  render(){
   const  { isSigned } = this.props;
    console.log('Is signed', isSigned);
    return (
            <div className="App">
                {isSigned === false &&
                    <Login />
                }
                {isSigned === true &&
                    <div>
                        <NavBarContainer />
                        <Route exact path={Routes.offices} component={Offices} />
                        <Route path={Routes.employees} component={Employees}/>
                        <Route path={Routes.sales} component={SalesList} />
                        <Route path={Routes.salesRegister} component={SalesForm} />
                        <Route path={Routes.exchangeReport} component={ExchangeList} />
                        <Route path={Routes.exchangeRegister} component={ExchangeForm} />
                        <Route path={Routes.clients} component={Clients} />
                        <Route path={Routes.rewardRegister} component={RewardForm} />
                        <Route path={Routes.rewards} component={RewardsList} />
                        <Route path={Routes.users} component={Users} />
                        <Route path={Routes.login} component={Login} />
                    </div>
                }
            </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        isSigned: state.session.isSigned
    };
};

export default connect(mapStateToProps)(App);
