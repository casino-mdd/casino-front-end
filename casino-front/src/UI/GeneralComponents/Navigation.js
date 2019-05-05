import React, { Component } from 'react'
import { Layout, Menu } from 'antd'
import Routes from '../../utils/routes';
import {NavLink} from 'react-router-dom';
const { Header, Sider, Content } = Layout;
const  Item  = Menu.Item;
const SubMenu = Menu.SubMenu;

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
                <SubMenu title={<span>Ventas</span>}>
                    <Item>
                        <NavLink to={Routes.salesRegister}>
                            Registro ventas
                        </NavLink>
                    </Item>
                    <Item>
                        <NavLink to={Routes.sales}>
                            Reporte Ventas
                        </NavLink>
                    </Item>
                </SubMenu>
                <SubMenu title={<span>Intercambios</span>}>
                    <Item>
                        <NavLink to={Routes.exchangeRegister}>
                            Redimir premio
                        </NavLink>
                    </Item>
                    <Item>
                        <NavLink to={Routes.exchangeReport}>
                            Reporte intercambios
                        </NavLink>
                    </Item>
                </SubMenu>
                <SubMenu title={<span>Premios</span>}>
                    <Item>
                        <NavLink to={Routes.rewardRegister}>
                            Registro premios
                        </NavLink>
                    </Item>
                    <Item>
                        <NavLink to={Routes.rewards}>
                            Listado premios
                        </NavLink>
                    </Item>
                </SubMenu>
                <Item>
                    <NavLink to={Routes.users}>
                        Gestion usuarios
                    </NavLink>
                </Item>
            </Menu> 
        )
    }
}