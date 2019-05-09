import React, { Component } from 'react'
import { Layout, Menu, Button, Icon } from 'antd'
import Routes from '../../utils/routes';
import {NavLink} from 'react-router-dom';
import {connect} from "react-redux";
const { Header, Sider, Content } = Layout;
const  Item  = Menu.Item;
const SubMenu = Menu.SubMenu;

class NavigationBar extends Component{
    constructor(props) {
        super(props);
        this.handleSignOut = this.handleSignOut.bind(this);
    }

    handleSignOut(){
        this.props.signOut();
    }

    render(){
        const {isSigned} = this.props;
        const {isAdmin} = this.props;

        return(
            <Menu theme='dark' mode='horizontal'>
                {isSigned === false &&
                <Item>
                    <NavLink to={Routes.home}>
                        Casino home
                    </NavLink>
                </Item>
                }
                {isSigned === true && isAdmin === true &&
                <Item>
                    <NavLink to={Routes.clients}>
                        Clientes
                    </NavLink>
                </Item>
                }
                {isSigned === true && isAdmin === true &&
                <Item>
                    <NavLink to={Routes.employees}>
                        Funcionarios
                    </NavLink>
                </Item>
                }
                {isSigned === true && isAdmin === true &&
                <Item>
                    <NavLink to={Routes.offices}>
                        Oficinas
                    </NavLink>
                </Item>
                }
                {isSigned === true && isAdmin === true &&
                <SubMenu title={<span>Premios</span>}>
                    <Item>
                        <NavLink to={Routes.rewardRegister}>
                            Registrar premios
                        </NavLink>
                    </Item>
                    <Item>
                        <NavLink to={Routes.rewards}>
                            Listado premios
                        </NavLink>
                    </Item>
                </SubMenu>
                }
                <SubMenu title={<span>Ventas</span>}>
                    <Item>
                        <NavLink to={Routes.salesRegister}>
                            Registrar venta
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
                            Registrar intercambio
                        </NavLink>
                    </Item>
                    <Item>
                        <NavLink to={Routes.exchangeReport}>
                            Reporte intercambios
                        </NavLink>
                    </Item>
                </SubMenu>
                {isSigned === true && isAdmin === true &&
                <Item>
                    <NavLink to={Routes.users}>
                        Usuarios
                    </NavLink>
                </Item>
                }
                <Item>
                    <Button onClick={this.handleSignOut} >
                        Salir
                        <Icon type={'logout'} />
                    </Button>
                </Item>

            </Menu> 
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isSigned: state.session.isSigned,
        isAdmin: state.session.isAdmin
    };
};

export default connect(mapStateToProps)(NavigationBar);