import React, { Component } from 'react'
import { Layout, Menu } from 'antd'
import Routes from '../../utils/routes';
import {NavLink} from 'react-router-dom';
const { Header, Sider, Content } = Layout;
const  Item  = Menu.Item;
const SubMenu = Menu.Item;

export default class NavigationSider extends Component{
    render(){
        return(
            <Menu theme='dark' mode='horizontal'>

                <Item>
                    <NavLink to={Routes.home}>
                    Casino home
                    </NavLink>
                </Item>
                <Item>
                    <NavLink to={Routes.clients}>
                        Clientes
                    </NavLink>
                </Item>
                <Item>
                    <NavLink to={Routes.employees}>
                        Empleados
                    </NavLink>
                </Item>
                <Item>
                    <NavLink to={Routes.offices}>
                        Oficinas
                    </NavLink>
                </Item>
                <Item>
                    <NavLink to={Routes.sales}>
                        Ventas
                    </NavLink>
                </Item>
                <Item>
                    <NavLink to={Routes.exchangeReport}>
                        Intercambios
                    </NavLink>
                </Item>
            </Menu> 
        )
    }
}