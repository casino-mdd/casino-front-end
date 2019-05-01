import React from 'react';
import {Layout} from 'antd'
import logo from './logo.svg';
import './App.css';
import Login from './UI/Account/login';
import Sider from './UI/GeneralComponents/Navigation';
import RegisterClient from "./UI/Forms/RegClient";
import RegisterEmployee from "./UI/Forms/RegEmployee";
import RegOffice from "./UI/Forms/RegOffice";
//import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <Sider />
      <Layout>
          <RegOffice/>
      </Layout>

    </div>

  );
}

export default App;
